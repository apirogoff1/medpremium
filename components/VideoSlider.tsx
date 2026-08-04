'use client'
import { useState, useEffect, useRef } from 'react'

const VIDEOS = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
]

const SHOW_DURATION = 10000
const FADE_DURATION = 2000

export default function VideoSlider() {
  const [current, setCurrent] = useState(0)
  const [ready, setReady] = useState(false)
  const refs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const first = refs.current[0]
    if (!first) return
    first.play().catch(() => {})
    const onCanPlay = () => setReady(true)
    first.addEventListener('canplay', onCanPlay)
    return () => first.removeEventListener('canplay', onCanPlay)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % VIDEOS.length
        const nextVideo = refs.current[next]
        if (nextVideo) {
          nextVideo.currentTime = 0
          nextVideo.play().catch(() => {})
        }
        return next
      })
    }, SHOW_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', isolation: 'isolate', contain: 'strict' }}
    >
      <img
        src="/videos/poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, transform: 'translateZ(0)' }}
      />
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={(el) => { refs.current[i] = el }}
          src={src}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? (ready ? 1 : 0) : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: i === current ? 2 : 1,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'opacity, transform',
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(55,60,68,0.72)', zIndex: 10, transform: 'translateZ(0)' }}
      />
    </div>
  )
}

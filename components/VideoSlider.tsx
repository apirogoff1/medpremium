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
  const refs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((v) => {
      if (v) v.play().catch(() => {})
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % VIDEOS.length)
    }, SHOW_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={(el) => { refs.current[i] = el }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: i === current ? 2 : 1,
            willChange: 'opacity',
          }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: 'rgba(55,60,68,0.72)', zIndex: 10 }} />
    </div>
  )
}

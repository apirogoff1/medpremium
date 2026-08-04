'use client'
import { useState, useEffect, useRef } from 'react'

const VIDEOS = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
]

export default function VideoSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null, null])

  useEffect(() => {
    // Preload all videos
    refs.current.forEach((v) => {
      if (v) {
        v.load()
        v.play().catch(() => {})
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % VIDEOS.length)
        setTransitioning(false)
      }, 1000)
    }, 6000)
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
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            transition: 'opacity 1s ease',
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0" style={{background: 'rgba(55,60,68,0.72)', zIndex: 10}} />
    </div>
  )
}

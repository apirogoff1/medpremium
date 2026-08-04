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
  const [prev, setPrev] = useState<number | null>(null)
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null, null])

  useEffect(() => {
    refs.current.forEach((v) => {
      if (v) v.play().catch(() => {})
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        return (c + 1) % VIDEOS.length
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (prev === null) return
    const timer = setTimeout(() => setPrev(null), 1500)
    return () => clearTimeout(timer)
  }, [prev])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {VIDEOS.map((src, i) => {
        const isCurrent = i === current
        const isPrev = i === prev
        if (!isCurrent && !isPrev) return null
        return (
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
              opacity: isCurrent ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: isCurrent ? 2 : 1,
            }}
          />
        )
      })}
      <div className="absolute inset-0" style={{background: 'rgba(55,60,68,0.72)', zIndex: 10}} />
    </div>
  )
}

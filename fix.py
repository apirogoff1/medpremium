content = """'use client'
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
  const [next, setNext] = useState(1)
  const [transitioning, setTransitioning] = useState(false)
  const currentRef = useRef<HTMLVideoElement>(null)
  const nextRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(next)
        setNext((next + 1) % VIDEOS.length)
        setTransitioning(false)
      }, 1500)
    }, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={currentRef}
        src={VIDEOS[current]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 1.5s ease', zIndex: 1 }}
      />
      <video
        ref={nextRef}
        src={VIDEOS[next]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: transitioning ? 1 : 0, transition: 'opacity 1.5s ease', zIndex: 2 }}
      />
      <div className="absolute inset-0" style={{background: 'rgba(55,60,68,0.72)', zIndex: 3}} />
    </div>
  )
}
"""

with open(r'C:\Users\raund\Desktop\portfolio\Medpremium\components\VideoSlider.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')
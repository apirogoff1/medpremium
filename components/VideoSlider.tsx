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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number>(0)

  // Рисуем текущее видео на canvas каждые 16мс
  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current
      const video = videoRefs.current[current]
      if (canvas && video && video.readyState >= 2) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current])

  // Запуск первого видео
  useEffect(() => {
    const first = videoRefs.current[0]
    if (!first) return
    first.play().catch(() => {})
    const onCanPlay = () => setReady(true)
    first.addEventListener('canplay', onCanPlay)
    return () => first.removeEventListener('canplay', onCanPlay)
  }, [])

  // Переключение видео каждые 10 сек
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % VIDEOS.length
        const nextVideo = videoRefs.current[next]
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
    <div className="absolute inset-0 overflow-hidden">
      {/* Постер пока canvas не готов */}
      <img
        src="/videos/poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Скрытые видео элементы — только для декодирования */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el }}
            src={src}
            muted
            loop
            playsInline
            preload="auto"
          />
        ))}
      </div>

      {/* Canvas — единственное что видит пользователь */}
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 2,
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* Затемнение */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(55,60,68,0.72)', zIndex: 10 }}
      />
    </div>
  )
}

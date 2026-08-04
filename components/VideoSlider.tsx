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
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number>(0)

  // Подгоняем размер canvas под контейнер
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ro = new ResizeObserver(() => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    })
    ro.observe(container)
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    return () => ro.disconnect()
  }, [])

  // Рисуем видео на canvas через requestAnimationFrame
  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current
      const video = videoRefs.current[current]
      if (canvas && video && video.readyState >= 2) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const cw = canvas.width
          const ch = canvas.height
          const vw = video.videoWidth
          const vh = video.videoHeight
          // object-cover: масштаб чтобы заполнить canvas сохраняя пропорции
          const scale = Math.max(cw / vw, ch / vh)
          const dw = vw * scale
          const dh = vh * scale
          const dx = (cw - dw) / 2
          const dy = (ch - dh) / 2
          ctx.drawImage(video, dx, dy, dw, dh)
        }
      }
      rafRef.current = setTimeout(() => requestAnimationFrame(draw), 33)
    }
    rafRef.current = setTimeout(() => requestAnimationFrame(draw), 33)
    return () => { cancelAnimationFrame(rafRef.current); clearTimeout(rafRef.current) }
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src="/videos/poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          zIndex: 2,
          opacity: ready ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(55,60,68,0.60)', zIndex: 10 }}
      />
    </div>
  )
}

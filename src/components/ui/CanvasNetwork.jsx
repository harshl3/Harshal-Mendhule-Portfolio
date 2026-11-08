import { useEffect, useRef } from 'react'

export function CanvasNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let animId = null
    let points = []
    let isPaused = false

    // Respect user's reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Cache theme primary color to avoid getComputedStyle on every single animation frame
    let primaryColor = '#0b8a78'
    const updateThemeColor = () => {
      primaryColor =
        getComputedStyle(document.documentElement).getPropertyValue('--p').trim() || '#0b8a78'
    }
    updateThemeColor()

    const themeObserver = new MutationObserver(updateThemeColor)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const setup = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      // Responsive particle count: fewer on mobile to conserve battery
      const isMobile = width < 768
      const maxPts = isMobile ? Math.min(24, Math.floor(width / 32)) : Math.min(55, Math.floor(width / 24))

      points = Array.from({ length: Math.max(12, maxPts) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }))
    }

    let resizeTimer = null
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setup, 150)
    }

    const handleVisibility = () => {
      isPaused = document.hidden
      if (!isPaused && !animId) {
        animId = requestAnimationFrame(render)
      }
    }

    setup()
    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)

    const render = () => {
      if (isPaused) {
        animId = null
        return
      }

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = ctx.fillStyle = primaryColor

      // Move points
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x = (p.x + p.vx + width) % width
        p.y = (p.y + p.vy + height) % height
      }

      // Draw points and connections
      const maxDist = width < 768 ? 95 : 125
      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < maxDist) {
            ctx.globalAlpha = (1 - dist / maxDist) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      themeObserver.disconnect()
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}

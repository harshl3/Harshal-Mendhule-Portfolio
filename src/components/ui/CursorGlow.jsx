import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    if (isTouch) return

    let mouseX = -500
    let mouseY = -500
    let currentX = -500
    let currentY = -500
    let animId = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!animId) {
        animId = requestAnimationFrame(updatePosition)
      }
    }

    const updatePosition = () => {
      // Smooth interpolation for subtle liquid inertia
      currentX += (mouseX - currentX) * 0.22
      currentY += (mouseY - currentY) * 0.22

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
        animId = requestAnimationFrame(updatePosition)
      } else {
        animId = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="glow hidden md:block"
      style={{ left: 0, top: 0, transform: 'translate3d(-500px, -500px, 0)' }}
      aria-hidden="true"
    />
  )
}


import { useRef } from 'react'

export function TiltCard({ children, className = '', ...props }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const b = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - b.left) / b.width - 0.5
    const y = (e.clientY - b.top) / b.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }

  return (
    <div
      ref={cardRef}
      className={'glass ed relative ' + className}
      style={{ transition: 'transform .15s' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}

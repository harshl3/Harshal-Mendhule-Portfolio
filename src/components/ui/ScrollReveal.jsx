import { useEffect, useRef } from 'react'

export function ScrollReveal({ children, className = '', delay = 0, ...props }) {
  const r = useRef(null)

  useEffect(() => {
    if (!r.current) return
    const o = new IntersectionObserver(
      ([e]) => e.isIntersecting && (r.current?.classList.add('in'), o.disconnect()),
      { threshold: 0.12 }
    )
    o.observe(r.current)
    return () => o.disconnect()
  }, [])

  return (
    <div
      ref={r}
      className={'rv ' + className}
      style={{ transitionDelay: delay * 90 + 'ms' }}
      {...props}
    >
      {children}
    </div>
  )
}

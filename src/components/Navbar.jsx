import { useState, useEffect, useRef } from 'react'
import { NAV, I } from '../data/constants'
import { ThemeToggle } from './ui/ThemeToggle'

export function Navbar({ theme, setTheme, activeSection }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('keydown', handleKey)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <header className="fixed top-0 inset-x-0 z-40 p-3" ref={menuRef}>
      <div className="glass max-w-6xl mx-auto px-3 py-2 flex items-center gap-3 justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <img src="/favicon.svg" alt="HM logo" width="36" height="36" />
          <span className="hidden sm:inline">Harshal Mendhule</span>
        </a>

        <nav className="hidden xl:flex gap-1" aria-label="Main Navigation">
          {NAV.map((n) => (
            <a
              key={n}
              href={'#' + n}
              className={`px-2.5 py-1.5 text-sm capitalize border-b-2 transition ${
                activeSection === n
                  ? 'text-tx border-q font-medium'
                  : 'text-mu border-transparent hover:text-tx'
              }`}
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="xl:hidden cursor-pointer"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d={I.menu} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="glass pop max-w-6xl mx-auto mt-2 p-3 grid grid-cols-2 gap-1 xl:hidden"
          style={{ background: 'color-mix(in srgb,var(--bg) 96%,transparent)' }}
        >
          {NAV.map((n) => (
            <a
              key={n}
              onClick={() => setOpen(false)}
              href={'#' + n}
              className="px-3 py-2.5 capitalize text-mu hover:text-tx"
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

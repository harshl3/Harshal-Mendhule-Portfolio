import { useState, useEffect, useRef } from 'react'
import { NAV } from './data/constants'
import { BackgroundScene } from './components/ui/BackgroundScene'
import { CanvasNetwork } from './components/ui/CanvasNetwork'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Achievements } from './components/Achievements'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { ResumeModal } from './components/ResumeModal'
import { Footer } from './components/Footer'

function TopBtn({ show }) {
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={
        'glass fixed bottom-5 right-5 z-20 size-11 !rounded-full grid place-items-center transition cursor-pointer ' +
        (show ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-3')
      }
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  )
}

export default function App() {
  const [sel, setSel] = useState(null)
  const [showResume, setShowResume] = useState(false)
  const [act, setAct] = useState('')
  const [pr, setPr] = useState(0)
  const gl = useRef(null)

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('hm-theme') === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  const pick = (t) => {
    setTheme(t)
    try {
      localStorage.setItem('hm-theme', t)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name=theme-color]')
      ?.setAttribute('content', theme === 'light' ? '#eef6f4' : '#0d1716')
  }, [theme])

  useEffect(() => {
    const o = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setAct(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach((i) => {
      const el = document.getElementById(i)
      if (el) o.observe(el)
    })

    const sc = () => {
      const denom = document.body.scrollHeight - window.innerHeight
      if (denom > 0) {
        setPr((window.scrollY / denom) * 100)
      }
    }

    let mvRaf = null
    const mv = (e) => {
      if (mvRaf) return
      mvRaf = requestAnimationFrame(() => {
        if (gl.current) {
          gl.current.style.left = e.clientX + 'px'
          gl.current.style.top = e.clientY + 'px'
        }
        mvRaf = null
      })
    }

    window.addEventListener('scroll', sc, { passive: true })
    window.addEventListener('mousemove', mv, { passive: true })

    return () => {
      o.disconnect()
      window.removeEventListener('scroll', sc)
      window.removeEventListener('mousemove', mv)
      if (mvRaf) cancelAnimationFrame(mvRaf)
    }
  }, [])

  return (
    <>
      <BackgroundScene />
      <CanvasNetwork />
      <div className="glow" ref={gl} />
      <div
        className="fixed top-0 left-0 h-[3px] z-30 bg-gradient-to-r from-p via-q to-r"
        style={{ width: pr + '%' }}
      />

      <Navbar theme={theme} setTheme={pick} activeSection={act} />

      <main id="top" className="max-w-6xl mx-auto px-5">
        <Hero onOpenResume={() => setShowResume(true)} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects onSelectProject={(p) => setSel(p)} />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <TopBtn show={pr > 10} />

      {sel && <ProjectModal p={sel} onClose={() => setSel(null)} />}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <Footer />
    </>
  )
}

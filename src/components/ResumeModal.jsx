import { useEffect } from 'react'
import { RESUME, I } from '../data/constants'

export function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div
        className="glass pop relative max-w-4xl w-full max-h-[92vh] flex flex-col p-4 sm:p-6 rounded-3xl border border-tx/15"
        style={{ background: 'color-mix(in srgb, var(--bg) 94%, var(--p))' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-tx/10">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-2xl bg-p/15 text-p grid place-items-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">Harshal Mendhule — Resume</h3>
              <p className="text-xs text-mu mt-0.5">B.Tech IT · Software Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={RESUME}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-p text-on text-xs sm:text-sm font-semibold shadow hover:-translate-y-0.5 transition cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={I.dl} />
              </svg>
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="size-9 rounded-full glass border border-tx/15 grid place-items-center text-tx hover:text-p transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 mt-4 rounded-2xl overflow-hidden border border-tx/10 bg-white/5 min-h-[62vh] max-h-[74vh]">
          <iframe
            src={`${RESUME}#toolbar=1&navpanes=0`}
            title="Harshal Mendhule Resume"
            className="w-full h-full min-h-[62vh] border-0"
          />
        </div>

        {/* Mobile notice */}
        <div className="sm:hidden text-center mt-2.5">
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-p hover:underline font-medium"
          >
            Tap here to open PDF in new tab ↗
          </a>
        </div>
      </div>
    </div>
  )
}

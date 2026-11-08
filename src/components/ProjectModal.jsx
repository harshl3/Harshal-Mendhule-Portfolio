import { useState, useEffect } from 'react'
import { GH, P } from '../data/constants'

export function ProjectModal({ p, onClose }) {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', k)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const Sec = ({ t, children }) => (
    <div className="mt-6">
      <h4 className="text-q font-medium text-sm mb-2">{t}</h4>
      {children}
    </div>
  )

  const hasImages = p.images && p.images.length > 0

  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={p.n}
        className="glass pop relative max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8"
        style={{ background: 'color-mix(in srgb,var(--bg) 90%,var(--p))' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          autoFocus
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 size-9 rounded-full glass grid place-items-center cursor-pointer hover:border-p transition"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 pr-10 flex-wrap">
          <h3 className="font-display text-3xl font-extrabold">{p.n}</h3>
          {p.live ? (
            <span className="text-xs text-q border border-q/40 rounded-full px-2">Live</span>
          ) : null}
        </div>

        {/* Screenshot Gallery if images exist */}
        {hasImages && (
          <div className="mt-5 rounded-2xl overflow-hidden border border-tx/15 glass p-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40">
              <img
                src={p.images[activeImg]}
                alt={`${p.n} screenshot ${activeImg + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {p.images.length > 1 && (
              <div className="flex gap-2 mt-2 justify-center">
                {p.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImg(idx)}
                    className={`size-14 rounded-lg overflow-hidden border-2 transition cursor-pointer shrink-0 ${
                      activeImg === idx ? 'border-p ring-2 ring-p/40' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <Sec t="The problem">
          <p className="text-tx/90">{p.pr}</p>
        </Sec>

        <Sec t="What I built">
          <p className="text-tx/90">{p.so}</p>
        </Sec>

        <Sec t="Key features">
          <ul className="grid gap-1.5">
            {p.hl.map((h) => (
              <li key={h} className="flex gap-2 text-tx/90">
                <span className="text-p">✦</span>
                {h}
              </li>
            ))}
          </ul>
        </Sec>

        <Sec t="Tech used">
          <div className="flex flex-wrap gap-1.5">
            {p.s.map((x) => (
              <span
                key={x}
                className="text-xs px-2.5 py-1 rounded-full border border-tx/15 text-mu"
              >
                {x}
              </span>
            ))}
          </div>
        </Sec>

        <div className="mt-7 flex flex-wrap gap-3 items-center">
          {p.lv && (
            <a
              href={p.lv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-p text-on shadow-[0_8px_30px_-8px_var(--p)] hover:-translate-y-0.5 transition"
            >
              {p.lvl || 'Live demo'} ↗
            </a>
          )}
          {p.play && (
            <a
              href={p.play}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium glass hover:-translate-y-0.5 transition"
            >
              Play Store ↗
            </a>
          )}
          {p.apk && p.apk !== p.lv && (
            <a
              href={p.apk}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium glass hover:-translate-y-0.5 transition"
            >
              Download APK ↗
            </a>
          )}
          <a
            href={p.repo ? `${GH}/${p.repo}` : GH}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium hover:-translate-y-0.5 transition ${
              !p.lv && !p.play ? 'bg-p text-on shadow-[0_8px_30px_-8px_var(--p)]' : 'glass'
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              aria-hidden
            >
              <path d={P.gh} />
            </svg>
            {p.repo ? 'View code on GitHub' : 'My GitHub'}
          </a>
          <button
            onClick={onClose}
            className="glass px-6 py-3 rounded-2xl cursor-pointer hover:border-p transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

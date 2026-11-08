import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { GH, P } from '../data/constants'
import { ScrollReveal } from './ui/ScrollReveal'
import { TiltCard } from './ui/TiltCard'

const Pill = ({ children }) => (
  <span className="text-xs px-2.5 py-1 rounded-full border border-tx/15 text-mu">
    {children}
  </span>
)

export function Projects({ onSelectProject }) {
  const [f, setF] = useState('All')
  const types = ['All', ...new Set(PROJECTS.map((p) => p.t))]

  return (
    <section id="projects" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Things I’ve built
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Projects
        </h2>
      </ScrollReveal>

      <div className="flex flex-wrap gap-2 mb-6">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setF(t)}
            className={`px-4 py-1.5 rounded-full border transition cursor-pointer ${
              f === t ? 'bg-p text-on border-p' : 'border-tx/20 text-mu hover:text-tx'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.filter((p) => f === 'All' || p.t === f).map((p, i) => (
          <ScrollReveal key={p.n} delay={i % 3}>
            <TiltCard
              className="p-6 flex flex-col h-full cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={p.n + ': view details'}
              onClick={() => onSelectProject(p)}
              onKeyDown={(e) => e.key === 'Enter' && onSelectProject(p)}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold">{p.n}</h3>
                {p.live ? (
                  <span className="text-xs text-q border border-q/40 rounded-full px-2">Live</span>
                ) : null}
              </div>

              <p className="text-mu mt-2 flex-1">{p.d}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.s.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-p text-sm font-medium">View details →</span>
                <div className="flex items-center gap-2.5">
                  {p.lv && (
                    <a
                      href={p.lv}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.n} ${p.lvl || 'live demo'}`}
                      className="text-mu hover:text-p transition"
                      title={p.lvl || 'Live demo'}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={p.repo ? `${GH}/${p.repo}` : GH}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Code on GitHub"
                    className="text-mu hover:text-p transition"
                    title={p.repo ? 'View code on GitHub' : 'GitHub profile'}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      aria-hidden
                    >
                      <path d={P.gh} />
                    </svg>
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

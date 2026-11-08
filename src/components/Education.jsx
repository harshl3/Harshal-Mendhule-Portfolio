import { I } from '../data/constants'
import { EDU } from '../data/education'
import { ScrollReveal } from './ui/ScrollReveal'
import { TiltCard } from './ui/TiltCard'

export function Education() {
  return (
    <section id="education" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Academic foundation
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Education
        </h2>
      </ScrollReveal>

      <div className="grid gap-4">
        {EDU.map((e, i) => (
          <ScrollReveal key={e[0]} delay={i}>
            <TiltCard className="p-5 flex items-center gap-5 flex-wrap">
              <div className="size-14 rounded-2xl bg-p/15 text-p grid place-items-center shrink-0">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={I.cap} />
                </svg>
              </div>
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-display text-xl font-bold">{e[0]}</h3>
                <p className="text-p">{e[1]}</p>
                <p className="text-sm text-mu mt-1">
                  {e[2]} · <span className="text-q">{e[4]}</span>
                </p>
              </div>
              <span className="glass px-4 py-1.5 font-mono font-bold flex gap-2 items-center shrink-0">
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
                  <path d={I.award} />
                </svg>
                {e[3]}
              </span>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

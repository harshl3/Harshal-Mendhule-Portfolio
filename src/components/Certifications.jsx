import { CERT } from '../data/certifications'
import { ScrollReveal } from './ui/ScrollReveal'
import { TiltCard } from './ui/TiltCard'

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Always learning
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Certifications
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERT.map((c, i) => (
          <ScrollReveal key={c[0]} delay={i % 3}>
            <TiltCard className="p-5 flex gap-4 items-center h-full">
              <div className="size-14 shrink-0 rounded-2xl grid place-items-center text-2xl bg-gradient-to-br from-p/30 to-r/30">
                {c[3]}
              </div>
              <div>
                <h3 className="font-display font-bold leading-tight">{c[0]}</h3>
                <p className="text-sm text-mu mt-1">
                  {c[1]}
                  {c[2] && ' · ' + c[2]}
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

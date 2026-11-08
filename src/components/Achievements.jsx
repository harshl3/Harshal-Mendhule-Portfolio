import { AW } from '../data/achievements'
import { ScrollReveal } from './ui/ScrollReveal'
import { TiltCard } from './ui/TiltCard'
import { CodingProfiles } from './CodingProfiles'

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Recognition
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Achievements
        </h2>
      </ScrollReveal>

      <CodingProfiles />

      <div className="grid md:grid-cols-3 gap-5">
        {AW.map((a, i) => (
          <ScrollReveal key={a[1]} delay={i}>
            <TiltCard className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl flt" style={{ animationDelay: -i + 's' }}>
                    {a[0]}
                  </div>
                  {a[4] && (
                    <span className="glass px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-p border border-p/20">
                      {a[4]}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-q">{a[1]}</h3>
                <p className="font-medium mt-1">{a[2]}</p>
                <p className="text-mu mt-1 text-sm">{a[3]}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

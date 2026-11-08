import { EXP } from '../data/experience'
import { ScrollReveal } from './ui/ScrollReveal'
import { TiltCard } from './ui/TiltCard'

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Where I’ve worked
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Experience
        </h2>
      </ScrollReveal>

      <div className="grid gap-4 border-l-2 border-p/30 pl-6">
        {EXP.map((e, i) => (
          <ScrollReveal key={e[0]} delay={i} className="relative">
            <span className="absolute -left-[33px] top-7 size-3.5 rounded-full bg-q ring-4 ring-q/20" />
            <TiltCard className="p-6">
              <span className="text-q text-sm">{e[2]}</span>
              <h3 className="font-display text-xl font-bold">{e[0]}</h3>
              <p className="text-p">{e[1]}</p>
              <p className="text-mu mt-2">{e[3]}</p>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

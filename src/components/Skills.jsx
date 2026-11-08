import { SK, SI } from '../data/skills'
import { ScrollReveal } from './ui/ScrollReveal'

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Toolbox
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Skills
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {Object.entries(SK).map(([k, v], i) => (
          <ScrollReveal key={k} delay={i} className="glass ed relative p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="size-11 rounded-2xl bg-p/15 grid place-items-center text-xl">
                {SI[k]}
              </span>
              <h3 className="font-display text-xl font-bold">{k}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {v.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 rounded-xl border border-tx/15 bg-tx/5 hover:bg-p hover:text-on hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_var(--p)] transition cursor-default"
                >
                  {n}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

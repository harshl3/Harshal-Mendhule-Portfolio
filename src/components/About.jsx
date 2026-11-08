import { ScrollReveal } from './ui/ScrollReveal'

export function About() {
  const STATS = [
    ['9.44', 'CGPA'],
    ['250+', 'coding problems solved'],
    ['100+', 'Play Store downloads'],
    ['2×', 'national competition winner'],
  ]

  return (
    <section id="about" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          About me
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          A developer who finishes what he starts
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
        <ScrollReveal className="glass p-7">
          <blockquote className="border-l-4 border-p pl-4 mb-5 font-display text-xl sm:text-2xl leading-snug">
            I’m passionate about building software that makes a real-world difference, from police
            surveillance systems to rural education platforms. I’m also expanding into AI/ML
            integration within platforms.
          </blockquote>
          <p className="text-lg leading-relaxed text-tx/90">
            I’m a final-year B.Tech Information Technology student with a strong foundation in Java
            and hands-on full-stack experience across Flutter, Firebase, React, Node.js, MongoDB and
            PostgreSQL. I’m learning Spring Boot and going deeper into AI and ML. I debug, build and
            publish apps on the Google Play Store, lead a technical team, and enjoy taking a project
            from concept to deployment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map(([a, b], i) => (
            <ScrollReveal key={b} delay={i} className="glass p-5 flex flex-col justify-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-p">{a}</div>
              <div className="text-sm text-mu mt-1 leading-snug">{b}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

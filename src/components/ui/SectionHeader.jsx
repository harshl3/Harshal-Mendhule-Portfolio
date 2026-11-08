import { ScrollReveal } from './ScrollReveal'

export function SectionHeader({ tag, children, subtitle, className = 'mb-12' }) {
  return (
    <ScrollReveal className={className}>
      <p className="text-q text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
        <span className="w-6 h-0.5 bg-q rounded-full" />
        {tag}
      </p>
      <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
        {children}
      </h2>
      {subtitle && <p className="text-mu text-base sm:text-lg mt-3 max-w-2xl">{subtitle}</p>}
    </ScrollReveal>
  )
}


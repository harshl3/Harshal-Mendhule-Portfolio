import { GFG, LC } from '../data/constants'
import { CP, LCD, LEETCODE_METRICS } from '../data/achievements'
import { ScrollReveal } from './ui/ScrollReveal'

const Tile = ([a, b]) => (
  <div key={b} className="glass p-3.5 sm:p-4 text-center">
    <div className="font-display text-xl sm:text-2xl font-extrabold text-p">{a}</div>
    <div className="text-xs text-mu mt-0.5">{b}</div>
  </div>
)

export function CodingProfiles() {
  let off = 0
  const R = 70
  const C = 2 * Math.PI * R

  return (
    <div className="grid lg:grid-cols-2 gap-5 mb-6">
      {/* GeeksforGeeks Card */}
      <ScrollReveal className="glass p-6 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-xl font-bold">GeeksforGeeks</h3>
          <a
            href={GFG}
            target="_blank"
            rel="noreferrer"
            className="text-p text-sm hover:underline"
          >
            View profile ↗
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <div className="relative size-[170px] shrink-0">
            <svg
              viewBox="0 0 180 180"
              className="size-full -rotate-90"
              role="img"
              aria-label="232 problems solved on GeeksforGeeks"
            >
              {CP.map(([n, v, c]) => {
                const len = (v / 232) * C
                const el = (
                  <circle
                    key={n}
                    cx="90"
                    cy="90"
                    r={R}
                    fill="none"
                    strokeWidth="16"
                    stroke={c}
                    strokeDasharray={`${len - 3} ${C - len + 3}`}
                    strokeDashoffset={-off}
                  />
                )
                off += len
                return el
              })}
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="font-display text-4xl font-extrabold">232</div>
                <div className="text-xs text-mu">problems solved</div>
              </div>
            </div>
          </div>
          <ul className="grid gap-2 text-sm">
            {CP.map(([n, v, c]) => (
              <li key={n} className="flex items-center gap-2">
                <i className="size-3 rounded-full" style={{ background: c }} />
                <span className="text-mu w-16">{n}</span>
                <b>{v}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {[
            ['850', 'Coding score'],
            ['7', 'Institute rank'],
            ['14 days', 'Longest streak'],
            ['43', 'POTDs solved'],
          ].map(Tile)}
        </div>
      </ScrollReveal>

      {/* LeetCode Card */}
      <ScrollReveal delay={1} className="glass p-6 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-xl font-bold">LeetCode</h3>
          <a
            href={LC}
            target="_blank"
            rel="noreferrer"
            className="text-p text-sm hover:underline"
          >
            View profile ↗
          </a>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-6xl font-extrabold">162</span>
          <span className="text-mu">/ 4101 solved</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {LCD.map(([n, v, t, c]) => (
            <div key={n} className="glass p-3 text-center">
              <div className="text-sm font-medium" style={{ color: c }}>
                {n}
              </div>
              <div className="font-bold">
                {v}
                <span className="text-mu text-xs font-normal">/{t}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {LEETCODE_METRICS.map(Tile)}
        </div>
        <p className="text-sm text-mu mt-4">Most recent badge: 50 Days Badge 2026</p>
      </ScrollReveal>
    </div>
  )
}

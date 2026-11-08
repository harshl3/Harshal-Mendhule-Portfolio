import { GH, LI, MAIL, GFG, LC, P, I } from '../data/constants'

const Ic = ({ d, fill, s = 18 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill={fill ? 'currentColor' : 'none'}
    stroke={fill ? 'none' : 'currentColor'}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={d} />
  </svg>
)

const Tx = ({ c, t }) => (
  <span className="font-bold text-[11px] tracking-tight" style={{ color: c }}>
    {t}
  </span>
)

const LINKS = [
  ['LinkedIn', LI, <Ic fill d={P.li} />],
  ['GitHub', GH, <Ic fill d={P.gh} />],
  ['GeeksforGeeks', GFG, <Tx c="#2f8d46" t="GfG" />],
  ['LeetCode', LC, <Tx c="#ffa116" t="LC" />],
  ['Email', 'mailto:' + MAIL, <Ic d={I.mail} />],
]

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 py-10 text-center text-sm text-mu">
      <div className="flex justify-center flex-wrap gap-2">
        {LINKS.map(([n, h, ic]) => (
          <a
            key={n}
            href={h}
            target="_blank"
            rel="noreferrer"
            aria-label={n}
            className="glass size-10 grid place-items-center hover:-translate-y-1 hover:border-p transition"
          >
            {ic}
          </a>
        ))}
      </div>
    </footer>
  )
}

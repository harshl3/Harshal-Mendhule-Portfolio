import { useState, useEffect } from 'react'
import {
  ROLES,
  GH,
  LI,
  MAIL,
  GFG,
  LC,
  P,
  I,
} from '../data/constants'

function Typer() {
  const [t, setT] = useState('')
  useEffect(() => {
    let i = 0,
      j = 0,
      del = 0,
      id
    const f = () => {
      const w = ROLES[i]
      j += del ? -1 : 1
      setT(w.slice(0, j))
      let d = del ? 35 : 75
      if (!del && j === w.length) {
        del = 1
        d = 1500
      } else if (del && !j) {
        del = 0
        i = (i + 1) % ROLES.length
        d = 300
      }
      id = setTimeout(f, d)
    }
    f()
    return () => clearTimeout(id)
  }, [])
  return (
    <span className="text-q">
      {t}
      <i className="cur" />
    </span>
  )
}

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

export function Hero({ onOpenResume }) {
  return (
    <section className="min-h-svh grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center pt-28 pb-10">
      <div>
        <span className="glass inline-flex items-center gap-2 px-3 py-1 text-sm">
          <i className="size-2 rounded-full bg-q animate-pulse" />
          Open to all opportunities · Software Developer
        </span>
        <p className="text-mu text-xl mt-6">Hello, I’m</p>
        <h1 className="font-display font-extrabold text-5xl sm:text-8xl leading-[.95] tracking-tight">
          <span className="grad">Harshal Mendhule</span>
        </h1>
        <p className="font-display text-2xl sm:text-3xl mt-5 min-h-[2.4rem]">
          I build <Typer />
        </p>
        <p className="mt-4 text-mu text-lg max-w-xl">
          I turn ideas into reliable products, from Spring Boot and Node.js backends to Flutter and
          React screens.
        </p>

        {/* Buttons: Explore projects, Resume (which opens preview modal with download inside), Contact me */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-p text-on shadow-[0_8px_30px_-8px_var(--p)] hover:-translate-y-0.5 transition"
          >
            Explore projects
          </a>

          <button
            onClick={onOpenResume}
            className="glass inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium hover:-translate-y-0.5 transition cursor-pointer"
          >
            <Ic d={I.dl} />
            Resume
          </button>

          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium hover:-translate-y-0.5 transition"
          >
            Contact me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-7 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-mu mr-1">Profiles</span>
          {LINKS.map(([n, h, ic]) => (
            <a
              key={n}
              href={h}
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-2 px-3 py-1.5 text-sm hover:-translate-y-0.5 hover:border-p transition"
            >
              {ic}
              {n}
            </a>
          ))}
        </div>
      </div>

      {/* Avatar Container: Original structure without extra emojis */}
      <div className="relative mx-auto size-[260px] sm:size-[380px]">
        <div
          className="absolute inset-6 rounded-full halo"
          style={{ background: 'radial-gradient(circle at 35% 30%,var(--orb1),var(--orb2))' }}
        />
        <div className="ring absolute inset-0 rounded-full border border-dashed border-p/50" />
        <div
          className="ring absolute inset-8 rounded-full border border-q/30"
          style={{ animationDirection: 'reverse' }}
        />
        <img
          src="/harshal.jpg"
          alt="Portrait of Harshal Mendhule"
          className="absolute inset-14 size-[calc(100%-7rem)] rounded-full object-cover ring-4 ring-p/60 shadow-[0_0_60px_-10px_var(--p)]"
        />
        <span className="flt glass absolute right-0 top-4 sm:-right-2 sm:top-6 px-3 py-1 text-sm">
          Web & Android
        </span>
        <span
          className="flt glass absolute left-0 bottom-8 sm:-left-4 sm:bottom-10 px-3 py-1 text-sm"
          style={{ animationDelay: '-2s' }}
        >
          Java & AIML
        </span>
        <span
          className="flt glass absolute right-2 -bottom-2 sm:right-4 px-3 py-1 text-sm"
          style={{ animationDelay: '-3.5s' }}
        >
          Spring Boot & Node.js
        </span>
      </div>
    </section>
  )
}

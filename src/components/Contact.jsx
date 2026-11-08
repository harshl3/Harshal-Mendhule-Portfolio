import { useState } from 'react'
import { MAIL, PHONE, LI, GH, GFG, LC, P, I } from '../data/constants'
import { ScrollReveal } from './ui/ScrollReveal'

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
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [copiedKey, setCopiedKey] = useState('')

  const handleCopy = (text, key) => {
    const markCopied = () => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(''), 2000)
    }

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(() => {
        fallbackCopy(text, markCopied)
      })
    } else {
      fallbackCopy(text, markCopied)
    }
  }

  const fallbackCopy = (text, callback) => {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      callback()
    } catch {
      // fallback
    }
  }

  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio message from ' + form.name)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`
    )
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20">
      <ScrollReveal className="mb-10">
        <p className="text-q text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-0.5 bg-q" />
          Say hello
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-2">
          Let’s build something
        </h2>
      </ScrollReveal>

      <ScrollReveal className="glass p-7 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg">
            Open to all opportunities: internships, full-time roles and collaborations in Java,
            full-stack and AI development.
          </p>

          <div className="mt-5 grid gap-3">
            {/* Email with 1-Click Copy */}
            <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-tx/10 bg-tx/5">
              <a
                className="flex items-center gap-3 hover:text-p transition text-sm sm:text-base truncate"
                href={'mailto:' + MAIL}
              >
                <Ic d={I.mail} />
                <span className="truncate">{MAIL}</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(MAIL, 'email')}
                className="glass px-2.5 py-1 text-xs rounded-lg flex items-center gap-1.5 text-mu hover:text-p transition cursor-pointer shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? (
                  <span className="text-p font-semibold">✓ Copied</span>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone with 1-Click Copy */}
            <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-tx/10 bg-tx/5">
              <a
                className="flex items-center gap-3 hover:text-p transition text-sm sm:text-base"
                href={`tel:${PHONE.replace(/\s+/g, '')}`}
              >
                <Ic d={I.phone} />
                <span>{PHONE}</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PHONE, 'phone')}
                className="glass px-2.5 py-1 text-xs rounded-lg flex items-center gap-1.5 text-mu hover:text-p transition cursor-pointer shrink-0"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedKey === 'phone' ? (
                  <span className="text-p font-semibold">✓ Copied</span>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {LINKS.map(([n, h, ic]) => (
              <a
                key={n}
                href={h}
                target="_blank"
                rel="noreferrer"
                aria-label={n}
                className="glass size-11 grid place-items-center hover:border-p hover:-translate-y-1 transition"
              >
                {ic}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={send} className="grid gap-3">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            aria-label="Your name"
            className="glass px-4 py-3 bg-transparent placeholder:text-mu"
          />
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            aria-label="Your email"
            className="glass px-4 py-3 bg-transparent placeholder:text-mu"
          />
          <textarea
            required
            rows={4}
            value={form.msg}
            onChange={(e) => setForm({ ...form, msg: e.target.value })}
            placeholder="Your message"
            aria-label="Your message"
            className="glass px-4 py-3 bg-transparent placeholder:text-mu"
          />
          <button className="px-6 py-3 rounded-2xl bg-p text-on font-medium hover:-translate-y-0.5 transition cursor-pointer">
            Send by email
          </button>
        </form>
      </ScrollReveal>
    </section>
  )
}

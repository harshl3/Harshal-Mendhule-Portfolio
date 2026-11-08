import { I } from '../../data/constants'

const Ic = ({ d }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={d} />
  </svg>
)

export function ThemeToggle({ theme, setTheme }) {
  const l = theme === 'light'
  return (
    <button
      role="switch"
      aria-checked={l}
      aria-label="Switch between dark and light theme"
      onClick={() => setTheme(l ? 'dark' : 'light')}
      className="glass relative flex items-center justify-between w-[76px] h-10 px-2.5 !rounded-full text-mu cursor-pointer"
    >
      <Ic d={I.moon} />
      <Ic d={I.sun} />
      <span
        className="absolute top-1 left-1 size-8 rounded-full bg-p text-on grid place-items-center transition-transform duration-300 shadow-[0_0_18px_-2px_var(--p)]"
        style={{ transform: l ? 'translateX(36px)' : 'none' }}
      >
        <Ic d={l ? I.sun : I.moon} />
      </span>
    </button>
  )
}

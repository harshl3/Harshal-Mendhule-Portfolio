import { Icon } from './Icons'

export function Toast({ message, type = 'success', onClose }) {
  if (!message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl glass shadow-2xl border border-p/30 pop text-sm font-medium"
      style={{ background: 'color-mix(in srgb, var(--bg) 85%, var(--p))' }}
    >
      <span className="size-6 rounded-full bg-p/20 text-p grid place-items-center shrink-0">
        <Icon name="check" size={14} />
      </span>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="ml-2 text-mu hover:text-tx transition p-1"
        >
          <Icon name="close" size={14} />
        </button>
      )}
    </div>
  )
}


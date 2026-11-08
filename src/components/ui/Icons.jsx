export function Icon({ name, size = 18, className = '', ...props }) {
  switch (name) {
    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.6V9h3.5v11.5z" />
        </svg>
      )
    case 'mail':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    case 'phone':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    case 'download':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      )
    case 'cap':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    case 'award':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    case 'external':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg>
      )
    case 'menu':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )
    case 'close':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      )
    case 'sun':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case 'moon':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )
    case 'arrow-up':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      )
    case 'copy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )
    case 'check':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    case 'play':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M5 3.868v16.264c0 .859.948 1.38 1.674.922L20.2 12.923a1.077 1.077 0 0 0 0-1.846L6.674 2.946A1.076 1.076 0 0 0 5 3.868z" />
        </svg>
      )
    case 'file-text':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      )
    default:
      return null
  }
}


declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function fireFbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args)
  }
}

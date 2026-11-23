const DAY = 24 * 60 * 60 * 1000

export function getDaysAgo(date: string): number {
  const diff = Date.now() - new Date(date).getTime()
  return Math.max(0, Math.floor(diff / DAY))
}

export function formatDate(date: string, language: string): string {
  const locale = language === 'tr' ? 'tr-TR' : 'en-US'

  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

import {
  formatDistanceToNow,
  formatRelative,
  format,
  subDays,
  getYear
} from 'date-fns'

export function formatDate (date) {
  const now = new Date()
  const newDate = new Date(date)
  const currentYear = getYear(now)
  const postYear = getYear(newDate)

  const distance = formatDistanceToNow(newDate, { addSuffix: true })
  const relative = formatRelative(newDate, now)
  const customDateFormat =
    postYear === currentYear
      ? format(newDate, "EEE, MMM d 'at' h:mm a")
      : format(newDate, "EEE, MMM d, yyyy 'at' h:mm a")

  return newDate > subDays(now, 5)
    ? `${distance} • ${relative}`
    : customDateFormat
}

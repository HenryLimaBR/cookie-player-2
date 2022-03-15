export function parseSeconds(currentTime: number, duration: number) {
  return duration < 3600
    ? new Date(Math.floor(currentTime) * 1000).toISOString().substring(14, 19)
    : new Date(Math.floor(currentTime) * 1000).toISOString().substring(11, 19)
}
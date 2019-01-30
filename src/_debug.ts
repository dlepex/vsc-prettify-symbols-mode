
const isTrace = false

export function trace(...rest: any[]) {
  if (!isTrace) return
  console.log("!PRETTY", ...rest)
}
export const round = (value, places = 2) => {
  const exp = Math.pow(10, places)
  return Math.round(value * exp) / exp
}

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const sleep = (delay = 0) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}

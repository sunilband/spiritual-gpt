export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2 && parts) return parts.pop()?.split(';').shift()
  else return ''
}

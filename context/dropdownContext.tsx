import { createContext } from 'react'

const dropdownContext = createContext<{
  language: string | null
  setLanguage: (newValue: string) => void
  scripture: string | null
  setScripture: (newValue: string) => void
}>({
  language: null,
  setLanguage: () => undefined,
  scripture: null,
  setScripture: () => undefined,
})

export default dropdownContext

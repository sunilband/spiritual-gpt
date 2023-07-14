import { createContext } from 'react'
export interface firebaseObject {
  answer: string
  email: string
  language: string
  question: string
  scripture: string
  time: string
}
const userContext = createContext<{
  history: firebaseObject[] | null
  setHistory: (newValue: firebaseObject[] | null) => void
}>({
  history: null,
  setHistory: () => {},
})

export default userContext

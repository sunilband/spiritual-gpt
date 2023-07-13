import { createContext } from 'react'
export interface UserInterface {
  email: string
  image: string
  name: string
}
const userContext = createContext<{
  user: UserInterface | null
  setUser: (newValue: UserInterface | null) => void
}>({
  user: null,
  setUser: () => {},
})

export default userContext

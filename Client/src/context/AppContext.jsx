import { createContext, useMemo, useState } from 'react'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
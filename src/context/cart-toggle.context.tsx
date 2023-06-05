import {createContext, useState} from 'react'

export const CartToggleContext = createContext({
  cartToggle:null,
  setCartToggle:(click) => {return click}
})

export const CartToggleContextProvider = ({children}) => {
  const [cartToggle, setCartToggle] = useState(null)
  const value = {cartToggle, setCartToggle}
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
}

import {createContext, useState} from 'react'


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem)=> cartItem.id===productToAdd.id);

  if(existingCartItem){
    return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ? 
    {...cartItem, quantity:cartItem.quantity+1}: cartItem
    )
  }
  return [...cartItems, {...productToAdd, quantity:1}] 
}

const totalCountNumber = (cartItems) => {
  let tc = 1 
  cartItems.map(cartItem => tc = tc+cartItem.quantity )
  return tc
}

export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen:(click) => {return click},
  cartItems: [],
  addItemToCart: (word) => {return word},
  totalCount: 0,
})

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [totalCount, setTotalCount] = useState(0)

  

  const addItemToCart = (productToAdd) => {

    setTotalCount(totalCountNumber(cartItems))
    setCartItems(addCartItem(cartItems,productToAdd))
  }


  const value = {isCartOpen, setIsCartOpen,addItemToCart, cartItems, totalCount}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

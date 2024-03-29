import {createContext, useState,useEffect} from 'react'


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem)=> cartItem.id===productToAdd.id);

  if(existingCartItem){
    return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ? 
    {...cartItem, quantity:cartItem.quantity+1}: cartItem
    )
  }
  return [...cartItems, {...productToAdd, quantity:1}] 
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id===cartItemToRemove.id);

  if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem)=> 
    cartItem.id===cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen:(click) => {return click},
  cartItems: [],
  addItemToCart: (word) => {return word},
  removeItemFromCart: (product) => {return product},
  clearItemFromCart: (product) => {return product},
  CartCount: 0,
  CartTotal:0 
})

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [CartCount, setCartCount] = useState(0);
  const [CartTotal, setCartTotal] = useState(0);
  useEffect(() =>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0) 
    setCartCount(newCartCount); 
  },[cartItems])
  

  useEffect(() =>{
    const newCartTotal = cartItems.reduce((total,cartItem)=>total+ cartItem.quantity * cartItem.price,0) 
    setCartTotal(newCartTotal); 
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems,cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }


  const value = {isCartOpen, setIsCartOpen,addItemToCart, cartItems, CartCount,clearItemFromCart, removeItemFromCart, CartTotal}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

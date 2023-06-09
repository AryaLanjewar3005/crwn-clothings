import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from 'react'
import { CartContext } from '../../context/cart-toggle.context';
const CartIcon = () => {
  const {isCartOpen, setIsCartOpen,CartCount} = useContext(CartContext)
  const toggleIsCartOpen = (event) => {
    setIsCartOpen(!isCartOpen)
  }

  return(
  <div className="cart-icon-container" onClick = {toggleIsCartOpen}>
       <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{CartCount}</span>
    </div>
  )
}

export default CartIcon;

import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from 'react'
import { CartToggleContext } from '../../context/cart-toggle.context';
const CartIcon = () => {
  const {cartToggle,setCartToggle} = useContext(CartToggleContext)
  const toggleIsCartOpen = (event) => {
    if(cartToggle){
      setCartToggle(null)
    } else {
      setCartToggle(event)
      
    }
    console.log(cartToggle)
  }

  return(
  <div className="cart-icon-container" onClick = {toggleIsCartOpen}>
       <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon;

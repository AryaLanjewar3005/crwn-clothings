import {Link, Outlet} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {NavigationComponent, LogoContainer, NavLinksContainer, NavLink} from './navigation.styles';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../context/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/cart-toggle.context';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  return(
  <Fragment>
      <NavigationComponent>
        <LogoContainer to='/'><CrwnLogo className='logo'/></LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (
            <span className = 'nav-link' onClick={signOutUser}>
            Sign Out 
            </span>
            ) : (
            <NavLink to='/auth'>
                  SignIn 
                </NavLink>
              )}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown/>}
      </NavigationComponent>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;

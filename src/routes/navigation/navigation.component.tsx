import {Link, Outlet} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const singOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null);
  };
  return(
  <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'><div className='Logo'> <CrwnLogo className='logo'/> </div></Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser ? (
            <span className = 'nav-link' onClick={singOutHandler}>
            Sign Out 
            </span>
            ) : (
            <Link className='nav-link' to='/auth'>
                  SignIn 
                </Link>
              )}
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;

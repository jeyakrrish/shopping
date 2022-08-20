import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../context/user-context.';
import { CartContext } from '../../context/cart-context';

import { ReactComponent as Crown } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase-config';

import './navigation.styles.scss';

const NavBar = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const logOut = async () => {
    await signOutUser();
    console.log("signed out");
  }

  return (
    <React.Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div><Crown className='logo' /></div>
        </Link>

        <div className='nav-links-container'>

          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>

          {currentUser ? <span className='nav-link' onClick={logOut}>SIGN OUT</span> :
            <Link to='/auth' className='nav-link'>SIGN IN</Link>
          }

          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>

      <Outlet />

    </React.Fragment>
  )
}

export default NavBar;
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as Crown } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase-config';

import { userSelector } from '../../store/user/user.selector';
import { isCartOpenSelector } from '../../store/cart/cart.selector';

import { NavigationContainer, LogoContainer, NavLinkContainer, NavLinksContainer, Logo } from './navigation.styles.js';


const NavBar = () => {

  const  isCartOpen = useSelector(isCartOpenSelector);

  const currentUser = useSelector((state) => userSelector(state));

  const logOut = async () => {
    await signOutUser();
    console.log("signed out");

  }

  return (
    <React.Fragment>
      <NavigationContainer >

        <NavLinkContainer to='/'>
          <LogoContainer><Crown /></LogoContainer>
        </NavLinkContainer>

        <NavLinksContainer>

          <NavLinkContainer to='/shop'>
            SHOP
          </NavLinkContainer>

          {currentUser ? <NavLinkContainer as="span" onClick={logOut}>SIGN OUT</NavLinkContainer> :   // NavLinkContainer rendered as "span"
            <NavLinkContainer to='/auth'>SIGN IN</NavLinkContainer>
          }
          <Logo>
            <CartIcon />
          </Logo>
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />

    </React.Fragment>
  )
}

export default NavBar;
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import './navigation.styles.scss';

const NavBar = () => {

  return (
    <React.Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div><Crown className='logo' /></div>
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>Shop</Link>
          <Link to='/auth' className='nav-link'>SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default NavBar;
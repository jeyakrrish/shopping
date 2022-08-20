import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { UserContext } from '../../context/UserContext.';
import { signOutUser } from '../../utils/firebase/firebase-config';
import './navigation.styles.scss';

const NavBar = () => {

  const { currentUser } = useContext(UserContext);

  const logOut = async ()=>{
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
          <Link to='/shop' className='nav-link'>Shop</Link>
          { currentUser ? <span className='nav-link' onClick={logOut}>SIGN OUT</span> :
            <Link to='/auth' className='nav-link'>SIGN IN</Link> 
          }
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default NavBar;
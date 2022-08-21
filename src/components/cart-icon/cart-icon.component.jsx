
import { CartContext } from '../../context/cart-context';
import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({...props}) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className='cart-icon-container' onClick={toggle} >
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;
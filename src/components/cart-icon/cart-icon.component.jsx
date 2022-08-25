import { CartContext } from '../../context/cart-context';
import { useContext } from 'react';

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.js';

const CartIcon = ({...props}) => {
  const {  isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={toggle} >
        <ShoppingIcon />
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
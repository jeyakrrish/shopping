import { useSelector, useDispatch } from 'react-redux';
import {  cartCountSelector } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { isCartOpenSelector } from '../../store/cart/cart.selector.js';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.js';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(cartCountSelector);
  const isCartOpen = useSelector(isCartOpenSelector);

  const toggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggle} >
      <ShoppingIcon />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
import { useSelector, useDispatch } from 'react-redux';
import { CartSliceSelector } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.js';

const CartIcon = ({ ...props }) => {
  const dispatch = useDispatch();
  const { cartCount, isCartOpen } = useSelector(CartSliceSelector);

  const toggle = () => {
    dispatch(setIsCartOpen(isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggle} >
      <ShoppingIcon />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
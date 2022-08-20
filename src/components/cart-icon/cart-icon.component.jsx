
import { CartContext } from '../../context/cart-context';
import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({...props}) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const eventHandler = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className='cart-icon-container' onClick={eventHandler} >
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon;
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {

  const { cartItems } = useContext(CartContext);


  return (
    <div className='cart-dropdown-container'>

      {cartItems.length === 0 ?
        <div className='empty-message'>Your Cart is empty</div> :
        <div className='cart-items'>
          {cartItems.map((item) =>
            <CartItem key={item.id} cartItem={item} />
          )}
        </div>
      }

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown;
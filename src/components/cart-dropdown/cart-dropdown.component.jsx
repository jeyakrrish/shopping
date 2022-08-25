import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import { useNavigate } from 'react-router-dom';     // new concept

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropDown = () => {

  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();               // new concept

  const onCheckOutHandler = () => {             // new concept
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>

      {cartItems.length === 0 ?
        <EmptyMessage>Your Cart is empty</EmptyMessage> :
        <CartItems>
          {cartItems.map((item) =>
            <CartItem key={item.id} cartItem={item} />
          )}
        </CartItems>
      }
      <Button onClick={onCheckOutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown;
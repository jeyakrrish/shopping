// import { useContext } from 'react';
// import { CartContext } from '../../context/cart-context';

import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, deleteFromCart, removeFromCart } from '../../store/cart/cart.helper.js';
import { setCartItems } from '../../store/cart/cart.action.js';

import { CheckoutItemContainer, ImageContainer, Img, Name, Quantity, Price, Value, Arrow, RemoveButton } from './checkout-item.styles.js';
import { CartSliceSelector } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({ cartItem }) => {

  const { cartItems } = useSelector(CartSliceSelector);
  const dispatch = useDispatch();

  // const { addItemToCart, removeCartItem, deleteCartItem } = useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;

  const increaser = () => dispatch(setCartItems(addCartItem(cartItems, cartItem)));

  const decreaser = () => dispatch(setCartItems(removeFromCart(cartItems, cartItem)));

  const remover = () => dispatch(setCartItems(deleteFromCart(cartItems, cartItem)));

  return (
    <CheckoutItemContainer>

      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>

      <Quantity className='quantity'>
        <Arrow className='arrow' onClick={decreaser} >&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow className='arrow ' onClick={increaser} >&#10095;</Arrow>
      </Quantity>
      <Price className='price'>{price}</Price>
      <RemoveButton className='remove-button' onClick={remover} >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )

}

export default CheckoutItem;
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeCartItem, deleteCartItem } from '../../store/cart/cart.action.js';
import { CartSliceSelector } from '../../store/cart/cart.selector';

import { CheckoutItemContainer, ImageContainer, Img, Name, Quantity, Price, Value, Arrow, RemoveButton } from './checkout-item.styles.js';

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(CartSliceSelector);

  const increaser = () => dispatch(addItemToCart(cartItems, cartItem));

  const decreaser = () => dispatch(removeCartItem(cartItems, cartItem));

  const remover = () => dispatch(deleteCartItem(cartItems, cartItem));

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
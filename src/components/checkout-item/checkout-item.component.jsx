import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import { CheckoutItemContainer, ImageContainer, Img, Name, Quantity, Price, Value, Arrow, RemoveButton } from './checkout-item.styles.js';

const CheckoutItem = ({ cartItem }) => {

  const { addItemToCart, removeCartItem, deleteCartItem } = useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;

  const increaser = () => addItemToCart(cartItem);

  const decreaser = () => removeCartItem(cartItem);

  const remover = () => deleteCartItem(cartItem);

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
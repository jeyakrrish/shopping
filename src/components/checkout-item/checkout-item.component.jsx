import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

  const { addItemToCart, removeCartItem, deleteCartItem } = useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;

  const increaser = () => addItemToCart(cartItem);

  const decreaser = () => removeCartItem(cartItem);

  const remover = () => deleteCartItem(cartItem);

  return (
    <div className='checkout-item-container' >

      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <p className='arrow' onClick={decreaser} >&#10094;</p>
        <span className='value'>{quantity}</span>
        <p className='arrow ' onClick={increaser} >&#10095;</p>
      </span>
      <span className='price'>{price}</span>
      <section className='remove-button' onClick={remover} >&#10005;</section>
    </div>
  )

}

export default CheckoutItem;
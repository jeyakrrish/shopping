import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {

  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <section className='checkout-header'>
        <p className='checkout-block'>PRODUCT</p>
        <p className='checkout-block'>DESCRIPTION</p>
        <p className='checkout-block'>QUANTITY</p>
        <p className='checkout-block'>PRICE</p>
        <p className='checkout-block'>REMOVE</p>
      </section>
      {
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />
        )
      }
      <span className='total'>
        Total : {totalPrice}
      </span>
    </div>
  )
}

export default Checkout;
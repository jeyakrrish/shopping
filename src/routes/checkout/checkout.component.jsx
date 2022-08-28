import { useSelector } from 'react-redux';
import { CartSliceSelector, totalPriceSelector } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(CartSliceSelector);
  const totalPrice = useSelector(totalPriceSelector);
  return (
    <CheckoutContainer >
      <CheckoutHeader >
        <HeaderBlock>PRODUCT</HeaderBlock>
        <HeaderBlock>DESCRIPTION</HeaderBlock>
        <HeaderBlock>QUANTITY</HeaderBlock>
        <HeaderBlock>PRICE</HeaderBlock>
        <HeaderBlock>REMOVE</HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />
        )
      }
      <Total>
        Total : {totalPrice}
      </Total>
    </CheckoutContainer>
  )
}

export default Checkout;
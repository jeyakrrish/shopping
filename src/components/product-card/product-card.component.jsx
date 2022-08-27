import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../store/cart/cart.helper';
import { setCartItems } from '../../store/cart/cart.action';
import { CartSliceSelector } from '../../store/cart/cart.selector'

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import { Name, Price, Footer, ProductCardContainer } from './product-card.styles';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector(CartSliceSelector);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(setCartItems(addCartItem(cartItems, product)))
  }

  return (
    <ProductCardContainer className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <Footer className='footer'>
        <Name className='name'>{name}</Name>
        <Price className='price'>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart} >Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;
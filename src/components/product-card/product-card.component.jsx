import { useDispatch, useSelector } from 'react-redux';
import { CartSliceSelector } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import { Name, Price, Footer, ProductCardContainer } from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(CartSliceSelector);


  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
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
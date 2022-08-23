
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import {Name, Price, Footer, ProductCardContainer} from './product-card.styles';

const ProductCard = ({ product }) => {

  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
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
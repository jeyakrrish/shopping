import { CartItemContainer, Image, Name, ItemDetails } from './cart-item.styles.js';

const CartItem = ({ cartItem }) => {

  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} X {price}$</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;
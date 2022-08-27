
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const removeFromCart = (cartItems, product) => {
  //find
  const existingCartItem = cartItems.find((item) => item.id === product.id)  // object {}
  //existingCartItem.quantity === 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
  }
  //existingCartItem.quantity !== 1
  return cartItems.map(cartItem => cartItem.id === product.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}

export const deleteFromCart = (cartItems, productTodelete) => 
  cartItems.filter(cartItem => cartItem.id !== productTodelete.id);

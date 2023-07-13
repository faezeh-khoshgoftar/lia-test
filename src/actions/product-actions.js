export function addToCart(product) {
  return { type: "ADD_TO_CART", payload: product };
}

export function removeFromCart(product) {
  return { type: "REMOVE_FROM_CART", payload: product };
}

export function decrementCart(product) {
  return { type: "DECREMENT_CART", payload: product };
}

export function incrementCart(product) {
  return { type: "INCREMENT_CART", payload: product };
}

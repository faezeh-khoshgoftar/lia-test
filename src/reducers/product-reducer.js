function productReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        const products = state.filter((item) => item.id !== product.id);
        return [...products, product];
      }
      action.payload.quantity = 1;
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREMENT_CART":
      const product_Increment = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity++;
        }
        return item;
      });
      return product_Increment;

    case "DECREMENT_CART":
      const product_decrement = state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            item.quantity--;
          }
        }
        return item;
      });
      return product_decrement;

    default:
      return state;
  }
}
export default productReducer;

import { SET_CART_PRODUCT, REMOVE_CART_PRODUCT } from "../actionTypes";

const initialState = {
  cart_products: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CART_PRODUCT:
      return {
        ...state,
        cart_products: [...state.cart_products, payload],
      };
    case REMOVE_CART_PRODUCT:
      const new_cart_product = state.cart_products.slice().filter(
        (product) => product.id !== payload
      );
      return {
        ...state,
        cart_products: new_cart_product,
      };

    default:
      return state;
  }
}

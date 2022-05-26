import { SET_CART_PRODUCT, REMOVE_CART_PRODUCT } from "../actionTypes";

const initialState = {
  cart_products: [],
  total_products: 0,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CART_PRODUCT:
      return {
        ...state,
        cart_products: [...state.cart_products, payload],
        total_products: state.total_products + 1
      };
    case REMOVE_CART_PRODUCT:
      const new_cart_product = state.cart_products.slice().filter(
        (product) => product.id !== payload
      );
      return {
        ...state,
        cart_products: new_cart_product,
        total_products: state.total_products - 1
      };

    default:
      return state;
  }
}

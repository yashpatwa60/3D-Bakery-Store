import { GET_CART_PRODUCTS, SET_CART_PRODUCT, REMOVE_CART_PRODUCT } from "../actionTypes"

export const getCartProducts = (data) => {
    return {
        type: GET_CART_PRODUCTS,
        payload: data
    }
}

export const setCartProduct = (data) => {
    return {
        type: SET_CART_PRODUCT,
        payload: data
    }
}

export const removeCartProduct = (data) => {
    return {
        type: REMOVE_CART_PRODUCT,
        payload: data
    }
}
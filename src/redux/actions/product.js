import {
  SET_PROTUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actionTypes";

export const setProducts = (data) => {
    return {
        type: SET_PROTUCTS,
        payload: data
    }
}

export const selectedProduct = (data) => {
    return {
        type: SELECTED_PRODUCT,
        payload: data
    }
}

export const removeSelectedProduct = (data) => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
        payload: data
    }
}


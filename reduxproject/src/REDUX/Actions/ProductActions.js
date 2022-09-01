import { ActionTypes } from "../Types/Action-Types"
export const setProducts = (products) => {
    return {
        action: ActionTypes.SET_PRODUCTS,
        payload: products
    }
};
export const selectProduct = (product) => {
    return {
        action: ActionTypes.SELECT_PRODUCT,
        payload: product
    }
};
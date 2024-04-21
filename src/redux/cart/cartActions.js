import * as cartActionTypes from './cartActionTypes';
export const addToCart = ( product) => {
    return {
        type:cartActionTypes.ADD_TO_CART,
        payload: product
    }
}
export const increaseQuantity = (productId) =>{
    return {
        type:cartActionTypes.INCREASE_QUANTITY,
        payload: productId
    }
}
export const decreaseQuantity = (productId) =>{
    return {
        type:cartActionTypes.DECREASE_QUANTITY,
        payload: productId
    }
}
export const romoveFromCart = (productId) => {
    return{
        type:cartActionTypes.REMOVE_FROM_CART,
        payload: productId 
    }   
}

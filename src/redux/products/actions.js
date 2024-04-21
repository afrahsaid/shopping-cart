import * as actions from './actionTypes.js';
export const addProduct = (product) => {
    return {
        type: actions.ADD_PRODUCT,
        payload:product  
    }
}
export const addQuantity=(productId,quantity)=>{
    return {
        type:actions.ADD_QUANTITY,
        payload:{
            productId,
            quantity
        }
    }
}
export const removeQuantity = (productId) =>{
    return{
        type: actions.REMOVE_QUANTITY,
        payload: productId
    }
}
   import { initialState } from "./initialState";
   import * as actions from './actionTypes.js';

   const nextID= (items)=>{
    return items.reduce((id,item)=>Math.max(id,item.id), -1) +1;
   }
   const productReducer=(state = initialState, action)=>{
    switch (action.type){
        case actions.ADD_PRODUCT:
            return [
                ...state, {
                    id: nextID(state),
                    ...action.payload,
                    price: parseFloat( action.payload.price),
                    quantity: parseInt(action.payload.quantity)
                }
            ]
        case actions.ADD_QUANTITY:
            return  state.map((product)=>{
                    if(product.id === action.payload.productId){
                        return {
                            ...product,
                            quantity: product.quantity + action.payload.quantity
                        }
                    }else{
                        return product;
                    }
         })
            
        case actions.REMOVE_QUANTITY :
            return  state.map((product)=>{
                    if(product.id === action.payload){
                        return {
                            ...product,
                            quantity: product.quantity -1
                        }
                    }else {
                        return product;
                    }
                })       
       default:  return state;
    }
    }
export default productReducer;
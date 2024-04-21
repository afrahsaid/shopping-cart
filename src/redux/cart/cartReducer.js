import * as cartActionTypes from './cartActionTypes';
// import {initialState} from '../products/initialState';
const initialState=[];
const nextID=(state)=>{
   return state.reduce((id,state)=> Math.max(id,state.id),-1 )+1
}  
const findProduct =(state,action)=>{
    return state.find((p)=>p.productId === action.payload.id);
}
export default function cartReducer(state=initialState,action){
    switch(action.type){
        case cartActionTypes.ADD_TO_CART:
            const product = findProduct(state,action);
            if(product){
                return state.map((p)=> {
                        if(p.productId === product.productId){
                            return {
                                ...p,
                                quantity: p.quantity +1
                            }
                        } else {
                            return p;
                        }
                    })
                }  else {
                    return [
                        ...state,{
                            ...action.payload,
                                id:nextID(state),
                                quantity: 1,
                                productId:action.payload.id,
                        }
                    ]
                }
        case cartActionTypes.REMOVE_FROM_CART:
            return state.filter((product)=>product.id !== action.payload);

        case cartActionTypes.INCREASE_QUANTITY:
            return state.map((product) => {
                if(product.id === action.payload){
                    if(action.payload>=0){
                        return{
                            ...product,
                            quantity:product.quantity + 1
                        }
                    }
                    else{
                        return product;
                    }
                }else{
                    return product;
                }

            })  
        case cartActionTypes.DECREASE_QUANTITY:
            return state.map((product) => {
                if(product.id === action.payload){
                    return{
                        ...product,
                        quantity:product.quantity - 1
                    }
                }else{
                    return product;
                }

            })               
         default : return state;
    }
}

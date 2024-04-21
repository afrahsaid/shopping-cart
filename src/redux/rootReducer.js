import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";
import pageReducer from "./pages/pageReducer";
const rootReducer=combineReducers({ 
    product: productReducer,
    cart:cartReducer,
    pages:pageReducer
})
export default rootReducer;
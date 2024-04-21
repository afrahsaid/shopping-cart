const initialStatePage= {
    home:true,cart:false,add_product_page:false
}
const pageReducer = (state = initialStatePage, action) => {
  switch(action.type){
    case "HOME":
        return {home:true,cart:false,add_product_page:false}
    case "CART":
        return {home:false,cart:true,add_product_page:false}
    case "ADD_PRODUCT_PAGE":
        return {home:false, cart:false,add_product_page:true}
    default: return state;
  }
}
export default pageReducer
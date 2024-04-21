import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addQuantity, removeQuantity } from '../redux/products/actions';
import { increaseQuantity,decreaseQuantity,romoveFromCart } from '../redux/cart/cartActions';
const ItemsInCart = ({product}) => {
  const {id, productId,imgUrl, price, category, name,quantity}=product;
  const dispatch= useDispatch();

  const handleRemoveProduct =()=>{
    dispatch(addQuantity(productId,quantity));
    dispatch(romoveFromCart(id));
  }

  const handleDecreaseQuantity=()=>{
    dispatch(decreaseQuantity(id));
    dispatch( addQuantity(productId,1))
    console.log(quantity);
  }
 
  const handleIncreaseQuantity=()=>{
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId))  
  }
  if (quantity===0){
    handleRemoveProduct();
  }
  return (
    <div>
      <div className='flex sm:relative relative  '>
          <button className="lws-removeFromCart font-bold sm:absolute  absolute sm:top-0 top-0 sm:right-0 right-0 sm:p-2 p-1   " onClick={handleRemoveProduct}>
            <IoCloseCircle /> 
          </button>
      </div>
      <div className="rounded-lg shadow justify-center  grid sm:grid-cols-12 grid-cols-12 sm:gap-2 gap-1  items-center "> 
        <div className='sm:col-span-3 col-span-3 sm:pl-4 sm:pt-4 sm:pb-4 sm:mr-0 p-2 mr-0  ' >
          <img className=' rounded-lg sm:w-full w-full  sm:h-28  h-28' src={imgUrl} alt='Product Image'></img>
        </div>
      <div className='sm:col-span-6 col-span-6 m-0 justify-center sm:p-2  flex flex-col space-y-1'>
        <div className='font-bold capitalize sm:text-lg text-sm mb-1'>{name}</div>
        <div className="text-gray-700 text-sm ">Price: ${price}</div>
        <div className="text-gray-700 text-sm">Category: {category}</div>
      </div>
      <div className='sm:col-span-3 col-span-3 mt-0 justify-center items-center flex flex-col '>
        <div className=' border-gray-100 border text-center mr-0 flex flex-row'>
         <button className='bg-gray-100 text-sm sm:py-2 py-1 sm:px-4 px-2  rounded-sm cursor-pointer hover:bg-gray-500 duration-700 hover:text-blue-50' onClick={handleDecreaseQuantity} >-</button>
            <input type='text' className=' text-center h-8 w-8 text-sm  rounded'value={quantity} min={1} ></input>
          <button id='Button' className='bg-gray-100 text-sm sm:py-2 py-1 sm:px-4 px-2 rounded-sm cursor-pointer hover:bg-gray-500 duration-700 hover:text-blue-50'  onClick={handleIncreaseQuantity}>+</button>
        </div>
        <div className='mt-5 flex flex-col  items-center'>
          <p  className='text-sm'>Total: ${price * quantity}</p>
        </div>    
      </div>
    </div>
  </div>
  )
}

export default ItemsInCart
import React from 'react'
import { useSelector } from 'react-redux'
import ItemsInCart from './ItemsInCart'
import Billing from './Billing'
const MyCart = () => {
    const cartItems= useSelector((state)=> state.cart);
  return (
    <>
    <div className='py-8  container mx-auto px-4'>
      <h2 className='mb-10 text-xl font-bold'> Products</h2>
      <div className='flex flex-col md:flex-row justify-between sm:gap-8 gap-4 '>
        <div className="space-y-6 md:w-2/3 mb-4"> 
          {cartItems.length ? cartItems.map((p)=> <ItemsInCart product={p} key={p.id}></ItemsInCart>):<p className='font-bold text-center text-red-500 mt-9'>No product in the cart!</p>}
        </div>
        <div className='md:w-1/3 rounded-lg  min-h-20'><Billing cartItems= {cartItems} ></Billing></div>
      </div>
    </div>
    </>
  )
}

export default MyCart
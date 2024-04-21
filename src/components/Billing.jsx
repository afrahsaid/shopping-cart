import React from 'react'

const Billing = ({cartItems}) => {
    var subTotal=0;
    const shippingCost= 5.99;
    cartItems.map((p)=>{
        subTotal+=p.price * p.quantity
        })
    const total = subTotal+shippingCost;
    
  return (
    <div>
    <h2 className='font-bold text-center mb-5 text-xl'>Billing Info</h2>
    <div className='flex flex-col md:flex-col md:h-[4] md:p-7 mt-6 p-2  shadow'>
        <div className='flex md:flex-row justify-between mb-2'> 
            <p>Subtotal</p>
            <p>${subTotal}</p>
        </div>
        <div className='flex md:flex-row justify-between'> 
            <p className='text-gray-700'>Shipping</p>
            <p className='text-gray-700 mb-2'>${subTotal >0 ? shippingCost: 0}</p>
        </div> 
        <hr className="my-4" /> 
        <div className='flex md:flex-row justify-between rounded p-2 m-1'>
            <div className='font-bold'>Total</div>
            <div className='flex flex-col md:flex-col mb-1 text-gray-700 '>
                <div className='font-bold'>${subTotal >0? parseFloat(total).toFixed(2):0} USD</div>
                <div className='text-sm'>including VAT</div>
            </div>
        </div>
        <button className='p-3 hover:bg-blue-600 duration-700 bg-blue-500 text-white rounded'>Check out</button>
    </div>
    </div>
  )
}
export default Billing
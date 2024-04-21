import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
     const cart= useSelector((state) => state.cart);
     const cartItemNo = cart.reduce((total,product) =>  total + product.quantity,0);
     const dispatch = useDispatch();
     const handleClickPage = (type) => {
        dispatch({type})
     }
  return (
    <nav className="bg-blue-500 text-white">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <a href="/"
            className="btn btn-ghost text-xl" 
          > Shopping Cart
          </a>
        </div>
        <div className="flex-none space-x-4">
          <div className="dropdown dropdown-end font-semibold">
            <button className='btn btn-ghost duration-700' onClick={()=>handleClickPage("HOME")}>Home</button>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <div className="w-10 rounded-full">
                Admin
              </div>
            </div>
            <ul tabIndex={0} className=" text-center cursor-pointer dropdown-content mt-3 z-[1] p-2   bg-blue-600  hover:bg-blue-500 duration-700 rounded-box w-52">
              <li>
                <a className=" text-white  " role='button' onClick={()=>handleClickPage("ADD_PRODUCT_PAGE")}>
                  Add Products
                </a>
              </li>  
            </ul>
          </div>
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" onClick={()=>handleClickPage("CART")} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item" >{cartItemNo}</span>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar
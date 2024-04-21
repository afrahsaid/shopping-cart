import React from 'react'
import Home from './Home'
import MyCart from './MyCart'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'

const Page = () => {
  const pages=useSelector((state) => state.pages);
  const pageSelect = (pages) => {
    if (pages.home){
          return <Home></Home>;
      } else if(pages.cart){
          return <MyCart></MyCart>;
        } else if (pages.add_product_page){
          return <AddProduct></AddProduct>;
        } else return  <Home></Home>;
    } 
  return (
    <>
    {pageSelect(pages)}
    </>
  )
}
export default Page
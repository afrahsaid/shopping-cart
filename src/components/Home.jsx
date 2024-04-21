import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
const Home = () => {
  const products = useSelector((state)=> state.product);
  return (
    <main className='max-w-7xl mx-auto py-8 px-4'>
        <div className=' gap-8'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:gap-y-10 md:gap-y-5 sm:gap-y-2.5 gap-y-5 lg:gap-x-10 md:gap-x-5 sm:gap-x-2.5'>
                {
                products.length >0 ? (products.map((p,i)=>(<ProductItem key={i} product={p}></ProductItem>) )): <div> No Products Found!</div>
               }
              </div>
        </div>
    </main>  
  )
}

export default Home
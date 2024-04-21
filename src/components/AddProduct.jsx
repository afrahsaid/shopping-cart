import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/actions';
const AddProduct = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit,formState:{errors},} = useForm();
    
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        const textElement= document.getElementById("added-text-pop");
        textElement.innerHTML="Product added Successfully!" ;
        setTimeout(()=>{textElement.innerHTML=""},2000)
    }
  return (
    <div className='formContainer '>
        <h4 className='formTitle'>Add New Product!</h4>
        <form className='space-y-4 text-[#534F4F] ' onSubmit={handleSubmit(onSubmit)}> 
            <div className='space-y-2'>
                <label>Product Name</label>
                <input type='text' name='name' id='name' className='addProductInput' {...register("name",{required:true})}></input>
            </div>
            {/* Category section  */}
            <div className='space-y-2'>
                <label>Category</label>
                <select name='category' id='category' className='addProductInput' {...register("category",{required:true})}>
                    <option value=""> Select a category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Gadgets">Gadgets</option>
                    <option value="Bags">Bags</option>
                </select>
            </div>
            {/* Image section */}
            <div className='space-y-2'>
                <label>Image Url</label>
                <input type='url'  className='addProductInput' {...register("imgUrl",{required:true})}></input >
            </div>
            {errors.imgUrl && <div className=' text-red-600'>This field is required</div>}
            {/* PRICE and quantity */}
            <div className='grid sm:grid-cols-2 gap-8 pb-2'>
                <div className='space-y-2'>
                    <label>Price</label>
                    <input type='number' name='price' id='price' className='addProductInput' {...register("price",{required:true})}></input>
                </div>
                <div className='space-y-2'>
                    <label>Quantity</label>
                    <input type="number" name='quantity' id='quantity' className='addProductInput' {...register('quantity',{required:true,min:0})}></input>
                </div>
            </div>
            <button className='submit bg-blue-600  hover:bg-blue-500 duration-700 text-white py-2 px-2 rounded object-center' type='submit'>Add Product</button>

        </form>
        <div id='added-text-pop' className='text-center mt-3 text-red-500 italic'></div>
    </div>
  )
}

export default AddProduct
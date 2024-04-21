import React from 'react'
import {  useDispatch } from 'react-redux';
import {addToCart} from '../redux/cart/cartActions';
import { removeQuantity } from '../redux/products/actions';
const ProductItem = ({product}) => {
    const {id,name,imgUrl,price,quantity,category}=product;
    const dispatch = useDispatch();
    const handleClickAddToCart = () => {
        dispatch(addToCart(product))
        dispatch(removeQuantity(id))
    }
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={imgUrl} alt="product image" className="h-80 w-full" />
        <div className="badge badge-secondary p-3 absolute top-3 right-3">
          {category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
        </p>
        <div className="flex justify-between">
          <p className="w-full">Available: {quantity}</p>
          <p className="text-left">${price}</p>
        </div>
        <div className="card-actions mt-2">
          <button
            className="btn btn-sm btn-primary"
            disabled={quantity === 0}
            onClick={handleClickAddToCart}
          >
            AddToCart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
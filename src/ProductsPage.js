import React from 'react'
import { useContext } from 'react'
import ProductContext from './ProductContext'
import { Link } from 'react-router-dom';
function ProductsPage({name,price}) {
    const {items}=useContext(ProductContext)
    // const {AddToCart}=useContext(ProductContext)
  
  return (
      <div  className='bg-primary'>
        <Link to="/" className='btn btn-dark mb-5'>HomePage</Link>
        <div className='bg-info'> {items.length}</div>
      </div>
  )
}

export default ProductsPage
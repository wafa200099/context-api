import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import ProductContext from './ProductContext'
import {useState} from 'react';
function HomePage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleNameChange = event => {
    setName(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handlePriceChange = event => {
    setPrice(event.target.value);

    console.log('value is:', event.target.value);
  };
     const {items}=useContext(ProductContext)

    const {AddToCart}=useContext(ProductContext)
    console.log(items);
  

  return (
<div className='bg-info'>

<Link to="/p" className='btn btn-primary mb-5'>ProductsPage</Link>

<div>
  <div>
  <h2>name: {name}</h2>
      <input
        type="text"
        name="name"
        onChange={handleNameChange}
        value={name}
      />
       
      </div>
      <div>
      <h2>Price: {price}</h2>
         <input
        type="text"
        name="price"
        onChange={handlePriceChange}
        value={price}
      />
   
   

      </div>
  <button onClick={()=>AddToCart(name,price)}className='btn btn-primary m-3'>add</button>
 
  </div>
  </div> 
  
  )
}

export default HomePage
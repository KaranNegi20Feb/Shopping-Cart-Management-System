import React, { useState,useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Products from './features/products/Products';
import Cart from './features/cart/Cart';
import { fetchAsync } from './features/cart/cartSlice';

function App() {
  const[showCart,setShowCart]=useState(false);
  const items=useSelector(state=>state.cart.items);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAsync())
  },[]);
  return (
    <div className="App">
      <button className="cart-button" onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
      {showCart?<Cart></Cart>:<div className='products-card'>
        <h1>Products</h1>
        <Products></Products>
      </div>}
      
      
    </div>
  );
}

export default App;

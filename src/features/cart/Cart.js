import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, fetchAsync, updateAsync } from './cartSlice';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const items=useSelector(state=>state.cart.items);
  const handleChange=(e,id)=>{
      console.log(e.target.value);
      dispatch(updateAsync({id,change:{quantity:e.target.value}}))

  }
  return (
    <div>
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        
          {items.map((item)=>
            <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="product-image" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.Brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select name="quantity" id="quantity" value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
    </div>
          
          )}
          
  
</div>
          <h1>Total:${items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h1>
    </div>
  );
}

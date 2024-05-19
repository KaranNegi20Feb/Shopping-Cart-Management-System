import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from './productsSlice';
import './Products.css';
import { addAsync } from '../cart/cartSlice';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={() => dispatch(addAsync(product))}>Add to Cart</button>
          </p>
        </div>
      ))}
    </div>
  );
}

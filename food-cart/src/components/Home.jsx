import React, { useState, useContext } from 'react';
import data from "../assets/products.json";
import Product from './Product';
import { cartContext } from '../App'; // Import the cart context
import "./Home.css";

const Home = () => {
  const { cart, setCart } = useContext(cartContext); // Use context to access cart and setCart
  const [products] = useState(data);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;

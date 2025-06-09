import React, { useEffect, useState, useContext } from 'react';
import { cartContext } from '../App';
import "./viewcart.css";

const Viewcart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0));
  }, [cart]);

  return (
    <><div className="cart">

      <h1 className='cart-heading'>Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="Product" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='cart-amt'>Total Amount: {(total.toFixed(2))}</h2>
      </div>
    </>
  );
};

export default Viewcart;

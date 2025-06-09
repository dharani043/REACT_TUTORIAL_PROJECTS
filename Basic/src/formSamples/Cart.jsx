import {useState} from 'react'

export const Cart = () => {
    const [cartCount,setCartCount]=useState(0)
  return (
    <>
    <h1 style={{height:"50px",width:"100vw",color:"black"}}>COUNT THE CART</h1>

    <h1>Number of items in the cart {cartCount}</h1>
    <br />
    <button onClick={()=>setCartCount(cartCount+1)}>Add to cart</button>
    <div className="card_con" style={{height:"100px",width:"100vw", opacity:"0"}}/>
    </>
  )
}

import React from "react";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";



const Cart = () => {
  const { cartItems, setCartItems } = useCart(); // Get cart items from context
  const [orderMessage, setOrderMessage] = useState("")
  
  const modifyCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);

  const submit=()=>{
    setCartItems([]);
    setOrderMessage(`Your order has been received! Please pay the payment ${totalPrice.toFixed(2)} and enjoy the music & cricket highlights! Thank You!!"
    `);
  }
  return (
    <div id="cart_container">
      <h3>Your Cart</h3>

      { orderMessage ? <p>{orderMessage}</p>
       :cartItems.length > 0 ? (
        <>
        <ul>
           {cartItems.map((item, index) => (
           <li key={index}>
           <div>
             {item.name} - ₹{item.price} x {item.quantity} = ₹{item.total.toFixed(2)}
           </div>
             <button id="delete" onClick={() => modifyCart(index)}>Delete</button>
           </li>
          ))}
        </ul>
        <div id="total-price">
            <strong>Total Price: ₹{totalPrice.toFixed(2)}</strong>
        </div>

        <button id="submit" onClick={submit}>Submit</button>
        </>
        
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;

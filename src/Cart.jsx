// Cart.jsx
import React from "react";

const Cart = () => {
  return (
    <div>
      <h1 id="yourcart">Your Cart</h1>
      <div id="total">
        <span id="totalText">Total:</span>
        <span id="totalPrice">$0.00</span>
      </div>
      <button id="submit">Submit</button>
    </div>
  );
};

export default Cart;
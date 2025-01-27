import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const addToCart = (itemsToAdd) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];

      itemsToAdd.forEach((newItem) => {
        const existingItemIndex = updatedCart.findIndex(
          (item) => item.id === newItem.id
        );

        if (existingItemIndex >= 0) {
          updatedCart[existingItemIndex].quantity += newItem.quantity;
          updatedCart[existingItemIndex].total += newItem.total;
        } else {
          updatedCart.push(newItem);
        }
      });
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

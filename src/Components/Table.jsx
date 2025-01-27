import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../Context/CartContext.jsx";
import { CartProvider } from "../Context/CartContext.jsx";

// Sample menu data
const menuData = {
  "/pizza-menu": [
    { id: "margherita", name: "Pizza Margherita", price: 12 },
    { id: "pepperoni", name: "Pepperoni Pizza", price: 15 },
    { id: "veggie", name: "Veggie Pizza", price: 10 },
  ],
  "/pasta-menu": [
    { id: "alfredo", name: "Alfredo Pasta", price: 18 },
    { id: "bolognese", name: "Bolognese Pasta", price: 20 },
    { id: "carbonara", name: "Carbonara Pasta", price: 22 },
  ],
  "/sandwich-menu": [
    { id: "club", name: "Club Sandwich", price: 8 },
    { id: "grilled_cheese", name: "Grilled Cheese Sandwich", price: 6 },
    { id: "veggie", name: "Veggie Sandwich", price: 7 },
  ],
  "/momos-menu": [
    { id: "chicken_momos", name: "Chicken Momos", price: 10 },
    { id: "veg_momos", name: "Veg Momos", price: 8 },
    { id: "tandoori_momos", name: "Tandoori Momos", price: 12 },
  ],
  "/icecream-menu": [
    { id: "vanilla", name: "Vanilla Ice Cream", price: 5 },
    { id: "chocolate", name: "Chocolate Ice Cream", price: 6 },
    { id: "strawberry", name: "Strawberry Ice Cream", price: 6 },
  ],
  "/roll-menu": [
    { id: "chicken_roll", name: "Chicken Roll", price: 10 },
    { id: "veg_roll", name: "Veg Roll", price: 8 },
    { id: "paneer_roll", name: "Paneer Roll", price: 9 },
  ],
  "/shake-menu": [
    { id: "chocolate_shake", name: "Chocolate Shake", price: 7 },
    { id: "strawberry_shake", name: "Strawberry Shake", price: 6 },
    { id: "banana_shake", name: "Banana Shake", price: 6 },
  ],
  "/patties-menu": [
    { id: "veg_patties", name: "Veg Patties", price: 5 },
    { id: "paneer_patties", name: "Paneer Patties", price: 7 },
    { id: "chicken_patties", name: "Chicken Patties", price: 8 },
  ],
  "/beverage-menu": [
    { id: "coke", name: "Coke", price: 3 },
    { id: "sprite", name: "Sprite", price: 3 },
    { id: "iced_tea", name: "Iced Tea", price: 4 },
  ],
  "/hotdrink-menu": [
  { id: "tea", name: "Tea", price: 5 },
  { id: "coffee", name: "Coffee", price: 7 },
  { id: "hot_chocolate", name: "Hot Chocolate", price: 8 },
],
"/starter-menu": [
  { id: "spring_rolls", name: "Spring Rolls", price: 10 },
  { id: "chicken_wings", name: "Chicken Wings", price: 12 },
  { id: "veg_kebabs", name: "Veg Kebabs", price: 9 },
],
"/soup-menu": [
  { id: "tomato_soup", name: "Tomato Soup", price: 6 },
  { id: "sweet_corn_soup", name: "Sweet Corn Soup", price: 7 },
  { id: "hot_and_sour_soup", name: "Hot and Sour Soup", price: 8 },
],
"/burger-menu": [
  { id: "cheeseburger", name: "Cheeseburger", price: 10 },
  { id: "chicken_burger", name: "Chicken Burger", price: 12 },
  { id: "veggie_burger", name: "Veggie Burger", price: 9 },
],
"/icecream-menu": [
  { id: "vanilla", name: "Vanilla Ice Cream", price: 5 },
  { id: "chocolate", name: "Chocolate Ice Cream", price: 6 },
  { id: "strawberry", name: "Strawberry Ice Cream", price: 5 },
],


};

const Table = ({ path }) => {
  const currentMenu = menuData[path] || [];
  const { addToCart } = useCart(); // Get the addToCart function from context

  // Manage quantities and added items
  const [quantities, setQuantities] = useState(
    currentMenu.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );
  const [addedItems, setAddedItems] = useState([]);

  const handleIncrement = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const addItems = () => {
    const itemsToAdd = currentMenu
      .filter((item) => quantities[item.id] > 0)
      .map((item) => ({
        ...item,
        quantity: quantities[item.id],
        total: item.price * quantities[item.id],
      }));

    setAddedItems(itemsToAdd); // Update the local added items state
    
    addToCart(itemsToAdd); // Add items to cart using context
    
    
  };

  return (
    <div>
      <h2>{path.replace("/", "").replace("-menu", "").toUpperCase()} Menu</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {currentMenu.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => handleIncrement(item.id)}>
                  +
                </button>
                <span className="mx-2">{quantities[item.id]}</span>
                <button className="btn btn-sm btn-danger" onClick={() => handleDecrement(item.id)}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id="addItems" className="btn btn-success" onClick={addItems}>
        Add Items
      </button>
      {addedItems.length > 0 && (
        <div className="mt-4">
          <h3>Items Added!</h3>
          <ul>
            {addedItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} x {item.quantity} = ₹{item.total}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Table;

import React, { useState,useNavigate } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Cart from "./Cart";
import Modal from "./Modal";
import "../index.css";
import { CartProvider } from "../Context/CartContext.jsx";

// Button Component
const Button = ({ id, label, path }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <button id={id} className="btn-primary" onClick={handleNavigation}>
      {label}
    </button>
  );
};

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  // Menu items array
  const menuItems = [
    { id: "pizza", label: "Pizza", path: "/pizza-menu" },
    { id: "sandwich", label: "Sandwich", path: "/sandwich-menu" },
    { id: "burger", label: "Burger", path: "/burger-menu" },
    { id: "pasta", label: "Pasta", path: "/pasta-menu" },
    { id: "momos", label: "Momos", path: "/momos-menu" },
    { id: "soup", label: "Soup", path: "/soup-menu" },
    { id: "chinese", label: "Chinese", path: "/chinese-menu" },
    { id: "shake", label: "Shakes", path: "/shake-menu" },
    { id: "beverage", label: "Beverage", path: "/beverage-menu" },
    { id: "hotdrink", label: "Hot Drink", path: "/hotdrink-menu" },
    { id: "maggie", label: "Maggie", path: "/maggie-menu" },
    { id: "roll", label: "Rolls", path: "/roll-menu" },
    { id: "icecream", label: "Icecream", path: "/icecream-menu" },
    { id: "patties", label: "Patties", path: "/patties-menu" },
    { id: "starter", label: "Starter", path: "/starter-menu" },
  ];

  const openMenu = (menuPath) => {
    setModalContent(<Table path={menuPath} />);
    setModalOpen(true);
  };

  const openCart = () => {
    setModalContent(<Cart />);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="Foundation">
          <p id="Howzatt">Howzatt Cafe</p>
          <div className="Stadium">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={item.id}
                className="btn-primary"
                onClick={() => openMenu(item.path)}
              >
                {item.label}
              </button>
            ))}

            <button id="yourcart" className="btn-primary" onClick={openCart}>
              Your Cart
            </button>

            <div className="Pitch">
              <div id="Stump1"></div>
              <div id="Stump2"></div>
              <div id="Stump3"></div>
              <div id="Stump4"></div>
              <div id="Stump5"></div>
              <div id="Stump6"></div>
            </div>
          </div>
        </div>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {modalContent}
        </Modal>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import React, { useState } from 'react';

const Table = () => {
    const [pizzaMenu, setPizzaMenu] = useState([
        { id: 1, name: 'Pizza Margherita', price: 12, quantity: 0 },
        { id: 2, name: 'Pepperoni Pizza', price: 15, quantity: 0 },
    ]);

    const handleIncrement = (id) => {
        setPizzaMenu(pizzaMenu.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecrement = (id) => {
        setPizzaMenu(pizzaMenu.map(item => 
            item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const handleAddToCart = (id) => {
        const item = pizzaMenu.find(item => item.id === id);
        if (item.quantity > 0) {
            alert(`${item.name} added to cart! Quantity: ${item.quantity}`);
            // Here you can implement cart storage (e.g., localStorage or global state)
        } else {
            alert('Please select a quantity greater than 0.');
        }
    };

    const handlePizzaClick = () => {
        const pizzaMenuHTML = `
            <html>
                <head>
                    <title>Pizza Menu</title>
                </head>
                <body>
                    <h1>Pizza Menu</h1>
                    <table border="1" style="width: 100%; text-align: center;">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${pizzaMenu.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>₹${item.price}</td>
                                    <td>${item.quantity}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </body>
            </html>
        `;
        const newTab = window.open();
        newTab.document.write(pizzaMenuHTML);
        newTab.document.close();
    };

    return (
        <div className="container mt-5">
            <h2>Pizza Menu</h2>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Add Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaMenu.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>
                                <button 
                                    className="btn btn-success btn-sm"
                                    onClick={() => handleIncrement(item.id)}
                                >
                                    +
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDecrement(item.id)}
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleAddToCart(item.id)}
                                >
                                    Add
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button 
                id="viewPizzaMenu" 
                className="btn btn-info mt-3"
                onClick={handlePizzaClick}
            >
                View Pizza Menu in New Tab
            </button>
            <button 
                id="viewcart" 
                className="btn btn-warning mt-3"
                onClick={() => alert('View Cart functionality to be implemented.')}
            >
                View Cart
            </button>
        </div>
    );
};

export default Table;

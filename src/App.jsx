import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Reusable Component for a Menu Table
function Menu({ title }) {
  return (
    <div>
      <h1>{title} Menu</h1>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample {title} Item</td>
            <td>₹50</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
}

function App() {
  const openTab = (path) => {
    window.open(path, "_blank");
  };

  return (
    <Router>
      <div className="Foundation">
        <p id="Howzatt">Howzatt Cafe</p>
        <div className="Stadium">
          <div className="Umpire1">
            <button id="pizza" onClick={() => openTab("/pizza-menu")}>Pizza</button>
          </div>
          <div className="Umpire2">
            <button id="sandwich" onClick={() => openTab("/sandwich-menu")}>Sandwich</button>
          </div>
          <div className="Batsman1">
            <button id="burger" onClick={() => openTab("/burger-menu")}>Burger</button>
          </div>
          <div className="Batsman2">
            <button id="pasta" onClick={() => openTab("/pasta-menu")}>Pasta</button>
          </div>
          <div className="Bowler">
            <button id="momos" onClick={() => openTab("/momos-menu")}>Momos</button>
          </div>
          <div className="WicketKeeper">
            <button id="soup" onClick={() => openTab("/soup-menu")}>Soup</button>
          </div>
          <div className="Player3">
            <button id="chinese" onClick={() => openTab("/chinese-menu")}>Chinese</button>
          </div>
          <div className="Player4">
            <button id="shake" onClick={() => openTab("/shake-menu")}>Shakes</button>
          </div>
          <div className="Player5">
            <button id="beverage" onClick={() => openTab("/beverage-menu")}>Beverage</button>
          </div>
          <div className="Player6">
            <button id="hotdrink" onClick={() => openTab("/hotdrink-menu")}>Hot Drink</button>
          </div>
          <div className="Player7">
            <button id="maggie" onClick={() => openTab("/maggie-menu")}>Maggie</button>
          </div>
          <div className="Player8">
            <button id="roll" onClick={() => openTab("/roll-menu")}>Rolls</button>
          </div>
          <div className="Player9">
            <button id="icecream" onClick={() => openTab("/icecream-menu")}>Icecream</button>
          </div>
          <div className="Player10">
            <button id="patties" onClick={() => openTab("/patties-menu")}>Patties</button>
          </div>
          <div className="Player11">
            <button id="starter" onClick={() => openTab("/starter-menu")}>Starter</button>
          </div>

          <div className="Pitch">
            <div className="Stump1"></div>
            <div className="Stump2"></div>
            <div className="Stump3"></div>
            <div className="Stump4"></div>
            <div className="Stump5"></div>
            <div className="Stump6"></div>
          </div>
        </div>
        <span>
          <button id="yourcart" onClick={() => openTab("/cart")}>Your Cart</button>
        </span>
      </div>

      <Routes>
        <Route path="/pizza-menu" element={<Menu title="Pizza" />} />
        <Route path="/sandwich-menu" element={<Menu title="Sandwich" />} />
        <Route path="/burger-menu" element={<Menu title="Burger" />} />
        <Route path="/pasta-menu" element={<Menu title="Pasta" />} />
        <Route path="/momos-menu" element={<Menu title="Momos" />} />
        <Route path="/soup-menu" element={<Menu title="Soup" />} />
        <Route path="/chinese-menu" element={<Menu title="Chinese" />} />
        <Route path="/shake-menu" element={<Menu title="Shakes" />} />
        <Route path="/beverage-menu" element={<Menu title="Beverage" />} />
        <Route path="/hotdrink-menu" element={<Menu title="Hot Drink" />} />
        <Route path="/maggie-menu" element={<Menu title="Maggie" />} />
        <Route path="/roll-menu" element={<Menu title="Rolls" />} />
        <Route path="/icecream-menu" element={<Menu title="Icecream" />} />
        <Route path="/patties-menu" element={<Menu title="Patties" />} />
        <Route path="/starter-menu" element={<Menu title="Starter" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

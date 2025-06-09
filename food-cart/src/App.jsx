import { createContext, useState } from 'react';
import './App.css';
import Viewcart from './components/Viewcart';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;

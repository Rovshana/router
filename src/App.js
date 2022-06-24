import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cola } from "./Pages/Cola";
import { Chips } from "./Pages/Chips";
import { IceCream } from "./Pages/IceCream";
import "bootstrap/dist/css/bootstrap.min.css";

import { MenuList } from "./Pages/MenuList";
function App() {
  return (
    <Router>
      
      <nav>
        <Link to="/"></Link>
        <Link to="/Cola" className="text-warning m-4">
          Cola
        </Link>
        <Link to="/Chips" className=" text-warning m-4">Chips</Link>
        <Link to="/IceCream">IceCream</Link>
      </nav>
      <Routes>
 
        <Route path="/" element={<MenuList />} />
        <Route path="/Cola" element={<Cola />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/IceCream" element={<IceCream />} />
      </Routes>
     
    </Router>
  );
}

export default App;

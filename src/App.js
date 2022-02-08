import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  const HatsPage = () => (
    <div>
      <h1>Hats Page</h1>
    </div>
  );

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;

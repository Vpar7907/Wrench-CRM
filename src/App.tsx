import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Adress from "./components/adress/Adress";

import Home from "./components/home/Home";

import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adress" element={<Adress />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;

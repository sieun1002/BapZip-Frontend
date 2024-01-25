import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./pages/Login1";
import Login2 from "./components/Login2";
import SineUp from "./components/SineUp";
import SelectSchool from "./components/SelectSchool";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/SineUp" element={<SineUp />} />
          <Route path="/SineUp/Select_School" element={<SelectSchool />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./pages/Login1";
import Login2 from "./components/Login/Login2";
import SineUp from "./components/Login/SineUp";
import SelectSchool from "./components/Login/SelectSchool";
import BottomNav2 from "./pages/BottomNav2";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    // <div className="root-wrap">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Login1 />} />
    //       <Route path="/Login2" element={<Login2 />} />
    //       <Route path="/SineUp" element={<SineUp />} />
    //       <Route path="/SineUp/Select_School" element={<SelectSchool />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Review" element={<BottomNav2 />}/>
          <Route path="/WriteReview" element={<WriteReview />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

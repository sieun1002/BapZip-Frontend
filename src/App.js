import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Login---------------------------------------------------------------
import Login1 from "./pages/Login1";
import Login2 from "./components/Login/Login2";
import SineUp from "./components/Login/SineUp";
import SelectSchool from "./components/Login/SelectSchool";
import SelectMajor from "./components/Login/SelectMajor";
import SineUpCompletion from "./components/Login/SineUpCompletion";

// BottomNav2---------------------------------------------------------------
import BottomNav2 from "./pages/BottomNav2";
import WriteReview from "./pages/WriteReview";

// BottomNav---------------------------------------------------------------

import BottomNav1 from "./pages/BottomNav1";
import Arlim from "./pages/Arlim";

// RestaurantInfo---------------------------------------------------------------
import RestaurantInfo from "./pages/RestaurantInfo";

function App() {
  return (
    // <div className="root-wrap">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Login1 />} />
    //       <Route path="/Login2" element={<Login2 />} />
    //       <Route path="/SineUp" element={<SineUp />} />
    //       <Route path="/SineUp/Select_School" element={<SelectSchool />} />
    //       <Route path="/SineUp/Select_Major" element={<SelectMajor />} />
    //       <Route
    //         path="/SineUp/SineUp-Completion"
    //         element={<SineUpCompletion />}
    //       />
    //       <Route path="/RestaurantInfo" element={<RestaurantInfo />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Review" element={<BottomNav2 />} />
          <Route path="/WriteReview" element={<WriteReview />} />
          <Route path="/Home" element={<BottomNav1 />} />
          <Route path="/arlim" element={<Arlim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

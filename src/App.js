import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpProvider } from "./context/SignUpContext";
import { Provider } from "react-redux";
import { store } from "./app/store";
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
import Silsiganin from "./pages/silsiganin";
// BottomNav4---------------------------------------------------------------
import BottomNav4 from "./pages/BottomNav4";

// RestaurantInfo---------------------------------------------------------------
import RestaurantInfo from "./pages/RestaurantInfo";

// Setting---------------------------------------------------------------
import Setting from "./pages/Setting";
import ManageReview from "./pages/ManageReview";

//Point
import Point from "./pages/Point";

function App() {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <div className="root-wrap">
          {/* <div className="App"> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login1 />} />
              <Route path="/users/auth/sigin" element={<Login2 />} />
              <Route path="/users/auth/signup" element={<SineUp />} />
              <Route path="/SineUp/Select_School" element={<SelectSchool />} />
              <Route path="/SineUp/Select_Major" element={<SelectMajor />} />
              <Route
                path="/users/auth/agreement"
                element={<SineUpCompletion />}
              />
              <Route path="/RestaurantInfo" element={<RestaurantInfo />} />

              <Route path="/Review" element={<BottomNav2 />} />
              <Route path="/WriteReview" element={<WriteReview />} />
              <Route path="/Home" element={<BottomNav1 />} />
              <Route path="/arlim" element={<Arlim />} />
              <Route path="/MyPage" element={<BottomNav4 />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/ManageReivew" element={<ManageReview />} />

              <Route path="/Mypage/Point" element={<Point />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SignUpProvider>
    </Provider>
  );
}

export default App;

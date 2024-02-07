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
import Ad from "./components/BottomNav2/Ad";
import BottomNav from "./components/BottomNav2/BottomNav";
import Header from "./components/BottomNav2/Header";
import ReviewRanking from "./components/BottomNav2/ReviewRanking";
import ReviewTimeline from "./components/BottomNav2/ReviewTimeline";

// BottomNav---------------------------------------------------------------
import Searchbar from "./components/BottomNav1/searchbar";
import Silsi from "./components/BottomNav1/silsi";
import Honjap from "./components/BottomNav1/honjap";
import Hot from "./components/BottomNav1/hot";
import Review from "./components/BottomNav1/reviewimage";

function App() {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <div className="root-wrap">
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
            </Routes>
          </BrowserRouter>
        </div>
      </SignUpProvider>
    </Provider>

    // <div className="App">
    //   <Header />
    //   <ReviewRanking />
    //   <Ad />
    //   <ReviewTimeline />
    //   <BottomNav />
    // </div>

    // <div>
    //   <Searchbar />
    //   <Silsi />
    //   <Honjap />
    //   <Hot />
    //   <Review />
    // </div>
  );
}

export default App;

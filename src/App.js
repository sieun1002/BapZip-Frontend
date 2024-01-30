import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./pages/Login1";
import Login2 from "./components/Login/Login2";
import SineUp from "./components/Login/SineUp";
import SelectSchool from "./components/Login/SelectSchool";
import Ad from "./components/BottomNav2/Ad";
import BottomNav from "./components/BottomNav2/BottomNav";
import Header from "./components/BottomNav2/Header";
import ReviewRanking from "./components/BottomNav2/ReviewRanking";
import ReviewTimeline from "./components/BottomNav2/ReviewTimeline";
import Searchbar from "./components/BottomNav1/searchbar";
import Silsi from "./components/BottomNav1/silsi";
import Honjap from "./components/BottomNav1/honjap";
import Hot from "./components/BottomNav1/hot";
import Review from "./components/BottomNav1/reviewimage";
import MySwiperComponent from "./components/BottomNav1/todayplace";
import Recommend from "./components/BottomNav1/recommend";

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
//     <div className="App">
//     <Header />
//     <ReviewRanking />
//     <Ad />
//     <ReviewTimeline />
//     <BottomNav />
//   </div>

    <div className="App">
    <Searchbar />
    <Silsi />
    <Honjap />
    <Hot />
    <Review />
    <MySwiperComponent />
    <Recommend />
    </div>
  );
}

export default App;

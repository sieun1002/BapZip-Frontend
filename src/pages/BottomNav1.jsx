import React from "react";
import Searchbar from "../components/BottomNav1/searchbar";
import Silsi from "../components/BottomNav1/silsi";
import Honjap from "../components/BottomNav1/honjap";
import Hot from "../components/BottomNav1/hot";
import Review from "../components/BottomNav1/reviewimage";
import Todayplace from "../components/BottomNav1/todayplace";
import Recommend from "../components/BottomNav1/recommend";
import BottomNav from "../components/BottomNav";

export default function BottomNav1() {
  return (
    <div className="container-BottomNav2">
      <Searchbar />
      <Silsi />
      <Honjap />
      <Hot />
      <Review />
      <Todayplace />
      <Recommend />
      <BottomNav menu="Home" />
    </div>
  );
}

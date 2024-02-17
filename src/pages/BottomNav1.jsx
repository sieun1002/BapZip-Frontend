import React, { useState } from "react";
import Searchbar from "../components/BottomNav1/searchbar";
import Silsi from "../components/BottomNav1/silsi";
import Honjap from "../components/BottomNav1/honjap";
import Hot from "../components/BottomNav1/hot";
import Review from "../components/BottomNav1/reviewimage";
import Todayplace from "../components/BottomNav1/todayplace";
import Recommend from "../components/BottomNav1/recommend";
import BottomNav from "../components/BottomNav";
import SearchSchool from "../components/BottomNav1/searchSchool";

export default function BottomNav1() {
  const [validSearchSchool, setValidSearchSchool] = useState(false);
  return (
    <div className="App">
      <div>
        {validSearchSchool ? (
          <SearchSchool setValidSearchSchool={setValidSearchSchool} />
        ) : null}

        <Searchbar />
        <Silsi setValidSearchSchool={setValidSearchSchool} />
        <Honjap />
        <Hot />
        <Review />
        <Todayplace />
        <Recommend />
        <BottomNav menu="Home" />
      </div>
    </div>
  );
}

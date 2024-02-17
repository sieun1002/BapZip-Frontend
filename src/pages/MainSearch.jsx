import React, { useState } from "react";
import Header from "../components/MainSearch/Header";
import SearchResult from "../components/MainSearch/SearchResult";
import Ranking from "../components/MainSearch/Ranking";

export default function MainSearch() {
  const [input, setInput] = useState("");
  const [storeLen, setLen] = useState(true);
  function setTxt(text){
    setInput(text);
  }
  return (
    <div className="App">
      <div className="MainSearch-BottomNav1">
        <Header text={input} setTxt={setTxt}/>
        <SearchResult text={input} setTxt={setTxt} setLen={setLen}/>
        <Ranking storeLen={storeLen}/>
      </div> 
    </div>
  );
}

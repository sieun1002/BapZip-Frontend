import React from "react";
import styled from "styled-components";
import Header from "../components/silsiganin/Header";
import Searchbar from "../components/silsiganin/Searchbar";
import Restaurant from "../components/silsiganin/Restaurant";
import Restaurant2 from "../components/silsiganin/Restaurant2";
import Restaurant3 from "../components/silsiganin/Restaurant3";
import Restaurant4 from "../components/silsiganin/Restaurant4";
import Restaurant5 from "../components/silsiganin/Restaurant5";

export default function Silsiganin() {
  return (
    <div className="App">
      <div style={{ height: "109vh" }}>
        <Header />
        <Searchbar />
        <Restaurant />
        <Restaurant2 />
        <Restaurant3 />
        <Restaurant4 />
        <Restaurant5 />
      </div>
    </div>
  );
}

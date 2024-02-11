import React from "react";
import styled from "styled-components";
import Header from "../components/ListIn/Header";
import Searchbar from "../components/ListIn/Searchbar";
import Restaurant from "../components/silsiganin/Restaurant";
import Restaurant2 from "../components/silsiganin/Restaurant2";
import Restaurant3 from "../components/silsiganin/Restaurant3";

export default function ListIn() {
  return (
    <div className="App">
      <div style={{ height: "109vh" }}>
        <Header />
        <Searchbar />

        <Restaurant />
        <Restaurant2 />
        <Restaurant3 />
      </div>
    </div>
  );
}

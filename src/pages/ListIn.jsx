import React from "react";
import styled from "styled-components";
import Header from "../components/ListIn/Header";
import Searchbar from "../components/ListIn/Searchbar";
import RestaurantBar from "../components/ListIn/RestaurantBar";
import Restaurant from "../components/silsiganin/Restaurant";
import Restaurant2 from "../components/silsiganin/Restaurant2";
import Restaurant3 from "../components/silsiganin/Restaurant3";

const Cont = styled.div`
  margin-top: 250px;
`;

export default function ListIn() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <RestaurantBar />
      <Cont>
        <Restaurant />
        <Restaurant2 />
        <Restaurant3 />
      </Cont>
    </div>
  );
}

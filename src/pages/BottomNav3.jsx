import React from "react";
import styled from "styled-components";
import Header from "../components/BottomNav3/Header";
import AroundSchool from "../components/BottomNav3/AroundSchool";
import BottomNav from "../components/BottomNav";
import Restaurant from "../components/silsiganin/Restaurant";
import Restaurant2 from "../components/silsiganin/Restaurant2";
import Restaurant3 from "../components/silsiganin/Restaurant3";

const Cont = styled.div`
  margin-top: 250px;
`;

export default function BottomNav3() {
  return (
    <div className="container-BottomNav2">
      <Header />
      <AroundSchool />
      <Cont>
        <Restaurant />
        <Restaurant2 />
        <Restaurant3 />
      </Cont>
      <BottomNav menu="List" />
    </div>
  );
}

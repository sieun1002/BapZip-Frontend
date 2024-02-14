import React from "react";
import styled from "styled-components";
import Header from "../components/BottomNav3/Header";
import AroundSchool from "../components/BottomNav3/AroundSchool";
import BottomNav from "../components/BottomNav";
import MainWaitingRank from "../components/BottomNav3/MainWaitingRank";
const Cont = styled.div`
  height: 67%;
  margin-top: 250px;
`;
export default function BottomNav3() {
  return (
    <div className="App" style={{ height: "100vh", position: "relative" }}>
      <div style={{ height: "100%" }}>
        <Header />
        <AroundSchool />
        <Cont style={{ position: "absolute", zIndex: "0" }}>
          <MainWaitingRank />
        </Cont>
        <BottomNav
          menu="List"
          style={{ position: "absolute", zIndex: "110" }}
        />
      </div>
    </div>
  );
}

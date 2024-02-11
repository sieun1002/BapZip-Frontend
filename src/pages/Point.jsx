import React, { useState, useEffect } from "react";
import api from "../api/LoginTokenApi";

import {
  BodyDiv,
  WrapperDiv,
  Div,
  HeaderDiv,
  MainPointImg,
  MainPointDiv,
  MainPointWrapper,
  MainPointP1,
  MainPointP2,
  MainPointPDiv,
  ArrowLeftImage,
  MenuDiv,
  ManuButton,
  MainWrapper,
} from "../styles/Point/Point.styled";

import mainPoint from "../images/Point/mainPoint.svg";
import arrowLeft from "../images/Login/arrowLeft.svg";

import PointSearch from "../components/Point/PointSearch";
import PointChange from "../components/Point/PointChange";

export default function Point() {
  const [currentTab, setCurrentTab] = useState("pointSearch");

  const renderTabComponent = () => {
    switch (currentTab) {
      case "pointChange":
        return <PointChange />;
      default:
        return <PointSearch />;
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv>
            <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            포인트
          </HeaderDiv>
          <MainWrapper>
            <MainPointWrapper>
              <MainPointDiv></MainPointDiv>
              <MainPointImg src={mainPoint} alt="mainPoint" />
              <MainPointPDiv>
                <MainPointP1>밥좋아님의 보유 포인트는?</MainPointP1>
                <MainPointP2>15000P</MainPointP2>
              </MainPointPDiv>
            </MainPointWrapper>
          </MainWrapper>

          <MenuDiv>
            <ManuButton
              color={currentTab === "pointSearch" ? "#FFBA35" : undefined}
              bottomColor={currentTab === "pointSearch" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("pointSearch")}
            >
              포인트 조회
            </ManuButton>
            <ManuButton
              color={currentTab === "pointChange" ? "#FFBA35" : undefined}
              bottomColor={currentTab === "pointChange" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("pointChange")}
            >
              포인트 전환
            </ManuButton>
          </MenuDiv>
          {renderTabComponent()}

          {/* <PointSearch /> */}
          {/* <PointChange /> */}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

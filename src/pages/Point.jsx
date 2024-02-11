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
} from "../styles/Point/Point.styled";

import mainPoint from "../images/Point/mainPoint.svg";
import arrowLeft from "../images/Login/arrowLeft.svg";

import PointSearch from "../components/Point/PointSearch";

export default function Point() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv>
            <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            포인트
          </HeaderDiv>
          <MainPointWrapper>
            <MainPointDiv></MainPointDiv>
            <MainPointImg src={mainPoint} alt="mainPoint" />
            <MainPointPDiv>
              <MainPointP1>밥좋아님의 보유 포인트는?</MainPointP1>
              <MainPointP2>15000P</MainPointP2>
            </MainPointPDiv>
          </MainPointWrapper>

          <MenuDiv>
            <ManuButton>포인트 조회</ManuButton>
            <ManuButton>포인트 전환</ManuButton>
          </MenuDiv>

          <PointSearch />
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

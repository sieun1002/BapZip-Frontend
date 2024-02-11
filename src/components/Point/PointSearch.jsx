import React, { useState, useEffect } from "react";
import api from "../../api/LoginTokenApi";

import { BodyDiv, WrapperDiv, Div } from "../../styles/Point/Point.styled";
import {
  SearchNav,
  SearchDetailSetting,
  ArrowBottomImg,
  SearchSelect,
  PointSearchDiv,
  PointSearchPDiv,
  PointSearchP1,
  PointSearchP2,
  PointSearchP3,
  PointSearchLine,
} from "../../styles/Point/PointSearch.styled";

import arrowBottom from "../../images/Point/arrowBottom.svg";

export default function PointSearch() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <SearchNav>
            <SearchDetailSetting>조회 세부 설정</SearchDetailSetting>
            <SearchSelect>
              전체
              <ArrowBottomImg src={arrowBottom} />
            </SearchSelect>
            <SearchSelect>
              1년
              <ArrowBottomImg src={arrowBottom} />
            </SearchSelect>
          </SearchNav>

          <PointSearchDiv>
            <PointSearchPDiv>
              <PointSearchP1>00식당 비방문객 혼잡도 체크</PointSearchP1>
              <PointSearchP2>2023.01.04</PointSearchP2>
            </PointSearchPDiv>
            <PointSearchP3>+10P</PointSearchP3>
          </PointSearchDiv>
          <PointSearchLine />
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

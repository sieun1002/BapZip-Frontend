import React, { useState, useEffect } from "react";
import api from "../../api/LoginTokenApi";

import { BodyDiv, WrapperDiv, Div } from "../../styles/Point/Point.styled";
import {
  SearchNav,
  SearchDetailSetting,
  ArrowBottomImg,
  SearchSelect,
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
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

import React, { useState, useRef } from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import { BreakLine } from "../../styles/RestaurantInfo/InfoHome.styled";
import {
  FullRateDiv,
  StarDiv,
  RateDiv,
  StarImg,
  StarP1,
  StarP2,
} from "../../styles/RestaurantInfo/InfoReview.styled";

import BarChart from "./BarChart";

import bigStar from "../../images/RestaurantInfo/bigStar.svg";

export default function InfoReview() {
  const data = [
    { label: "5", value: 18 },
    { label: "4", value: 14 },
    { label: "3", value: 8 },
    { label: "2", value: 2 },
    { label: "1", value: 0 },
    // '1점'에 대한 데이터가 없으므로 표시하지 않습니다.
  ];
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <FullRateDiv>
            <StarDiv>
              <StarImg src={bigStar} alt="bigStar" />
              <StarP1>0</StarP1>
              <StarP2>(0)</StarP2>
            </StarDiv>
            <RateDiv>
              <BarChart data={data} />
            </RateDiv>
          </FullRateDiv>
          <BreakLine></BreakLine>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

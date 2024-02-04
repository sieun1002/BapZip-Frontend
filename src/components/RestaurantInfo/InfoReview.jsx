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
  MainTitleDiv,
  MainTitleP1,
  MainTitleP2,
  ReviewDiv,
  ReviewProfileDiv,
  ReviewProfileNotImg,
  ReviewProfileImg,
  ReviewProfileName,
  ReviewStarDiv,
  ReviewStarImg,
  ReviewStarNum,
  ReviewContentDiv,
  ReviewImg,
  ReviewDate,
  ReviewLine,
  ReviewContainer,
} from "../../styles/RestaurantInfo/InfoReview.styled";

import BarChart from "./BarChart";

import bigStar from "../../images/RestaurantInfo/bigStar.svg";
import smallStarImg from "../../images/RestaurantInfo/smallStar.svg";
import reviewImage from "../../images/RestaurantInfo/reviewImage.svg";

export default function InfoReview() {
  const data = [
    { label: "5", value: 18 },
    { label: "4", value: 14 },
    { label: "3", value: 8 },
    { label: "2", value: 2 },
    { label: "1", value: 0 },
    // '1점'에 대한 데이터가 없으므로 표시하지 않습니다.
  ];

  const smallStar = Array.from({ length: 5 }, (_, index) => index);
  const review = Array.from({ length: 2 }, (_, index) => index);
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <FullRateDiv>
            <StarDiv>
              <StarImg src={bigStar} alt="bigStar" />
              <StarP1>4.8</StarP1>
              <StarP2>(42)</StarP2>
            </StarDiv>
            <RateDiv>
              <BarChart data={data} />
            </RateDiv>
          </FullRateDiv>
          <BreakLine></BreakLine>
          <MainTitleDiv>
            <MainTitleP1>리뷰</MainTitleP1>
            <MainTitleP2>42개</MainTitleP2>
          </MainTitleDiv>
          <ReviewContainer>
            {review.map((_, index) => (
              <ReviewDiv>
                <ReviewProfileDiv>
                  <ReviewProfileNotImg></ReviewProfileNotImg>
                  <ReviewProfileName>군밤</ReviewProfileName>
                </ReviewProfileDiv>
                <ReviewStarDiv>
                  {smallStar.map((_, index) => (
                    <ReviewStarImg
                      key={index}
                      src={smallStarImg}
                      alt="smallStar"
                    />
                  ))}
                  <ReviewStarNum>5.0</ReviewStarNum>
                </ReviewStarDiv>
                <ReviewContentDiv>
                  한끼 분식 세트 먹었는데 엄청 알차요! 저한텐 양이 딱 좋게
                  배부른 양이라서 자주 먹을 것 같습니다 ㅎㅎ
                </ReviewContentDiv>
                <ReviewImg src={reviewImage} alt="reviewImage" />
                <ReviewDate>2023.01.02</ReviewDate>
              </ReviewDiv>
            ))}
          </ReviewContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

import React, { useState } from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
  RestaurantImage,
  RestaurantMainInfoDiv,
  RestaurantNameP,
  RestaurantCatagoryP,
  WaitingAndStarDiv,
  ClockImage,
  WaitingStarP,
  StarImage,
  GoodImage,
  TagDiv,
  ScrapImage,
} from "../styles/RestaurantInfo/RestaurantInfo.styled";
import restaurant from "../images/RestaurantInfo/restaurant.svg";
import clock from "../images/RestaurantInfo/clock.svg";
import star from "../images/RestaurantInfo/star.svg";
import good from "../images/RestaurantInfo/good.svg";
import scrap from "../images/RestaurantInfo/scrap.svg";

import InfoHome from "../components/RestaurantInfo/InfoHome";

export default function RestaurantInfo() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <RestaurantImage src={restaurant} alt="restaurant" />
          <RestaurantMainInfoDiv>
            <ScrapImage src={scrap} alt="scrap" />
            {/*벡 정보 가져와야 함*/}
            <RestaurantNameP>학식당 - 분식</RestaurantNameP>
            {/*벡 정보 가져와야 함*/}
            <RestaurantCatagoryP>학식당 · 교내</RestaurantCatagoryP>
            <WaitingAndStarDiv>
              <ClockImage src={clock} alt="clock" />
              <WaitingStarP>웨이팅 예산 시간: </WaitingStarP>
              {/*벡 정보 가져와야 함*/}
              <WaitingStarP color="#E32525">70분</WaitingStarP>
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <StarImage src={star} alt="star" />
              {/*벡 정보 가져와야 함*/}
              <WaitingStarP>4.8 / 5</WaitingStarP>
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <GoodImage src={good} alt="good" />
              {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}
              <TagDiv>#혼밥</TagDiv>
              <TagDiv>#빠름</TagDiv>
              <TagDiv>#맛있음</TagDiv>
            </WaitingAndStarDiv>
          </RestaurantMainInfoDiv>
          <InfoHome></InfoHome>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

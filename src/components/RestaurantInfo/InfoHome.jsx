import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BodyDiv,
  WrapperDiv,
  Div,
  InfoNavDiv,
  InfoNav,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import {
  InfoDiv,
  MainP1,
  Pdiv,
  TitleP,
  ContentP,
  ContentDiv,
  AddressImage,
  BreakLine,
} from "../../styles/RestaurantInfo/InfoHome.styled";

import address from "../../images/RestaurantInfo/address.svg";

export default function InfoHome() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <InfoNavDiv>
            <InfoNav color="#FFBA35">홈</InfoNav>
            <InfoNav>메뉴</InfoNav>
            <InfoNav>리뷰</InfoNav>
            <InfoNav>실시간 채팅</InfoNav>
          </InfoNavDiv>
          <InfoDiv>
            <MainP1>가게정보</MainP1>
            {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}

            <Pdiv>
              <TitleP>평균 웨이팅</TitleP>
              <ContentDiv>
                <ContentP>30분 이내</ContentP>
              </ContentDiv>
            </Pdiv>
            <Pdiv>
              <TitleP>영업시간</TitleP>
              <ContentDiv>
                <ContentP>월 ~ 금 09:00 ~ 18:00</ContentP>
                <ContentP>12:00 ~ 13:00 브레이크 타임</ContentP>
              </ContentDiv>
            </Pdiv>
            <Pdiv>
              <TitleP>정기 휴무</TitleP>
              <ContentDiv>
                <ContentP>토일 휴무</ContentP>
                <ContentP>공휴일 휴무</ContentP>
              </ContentDiv>
            </Pdiv>
            <Pdiv>
              <TitleP>위치</TitleP>
              <ContentDiv>
                <ContentP>서울특별시 00구 00동 00빌딩 00동 00호</ContentP>
                {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}
                {/*누르면 복사되는 기능 추가*/}
                <ContentP>
                  <AddressImage src={address} alt="address" />
                  주소 복사
                </ContentP>
              </ContentDiv>
            </Pdiv>
          </InfoDiv>
          <BreakLine></BreakLine>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

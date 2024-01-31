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
  InfoMainP1,
  InfoPdiv,
  InfoTitleP,
  InfoContentP,
  InfoContentDiv,
  AddressImage,
  BreakLine,
  TodayNoticeDiv,
  TodayNoticeTitileDiv,
  TodayNoticeTitleP,
  TodayNoticeFullView,
  TodayNoticeContentDiv,
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
            <InfoMainP1>가게정보</InfoMainP1>
            {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}

            <InfoPdiv>
              <InfoTitleP>평균 웨이팅</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>30분 이내</InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>영업시간</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>월 ~ 금 09:00 ~ 18:00</InfoContentP>
                <InfoContentP>12:00 ~ 13:00 브레이크 타임</InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>정기 휴무</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>토일 휴무</InfoContentP>
                <InfoContentP>공휴일 휴무</InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
            <InfoPdiv>
              <InfoTitleP>위치</InfoTitleP>
              <InfoContentDiv>
                <InfoContentP>
                  서울특별시 00구 00동 00빌딩 00동 00호
                </InfoContentP>
                {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}
                {/*누르면 복사되는 기능 추가*/}
                <InfoContentP>
                  <AddressImage src={address} alt="address" />
                  주소 복사
                </InfoContentP>
              </InfoContentDiv>
            </InfoPdiv>
          </InfoDiv>
          <BreakLine></BreakLine>
          <TodayNoticeDiv>
            <TodayNoticeTitileDiv>
              <TodayNoticeTitleP>오늘의 공지</TodayNoticeTitleP>
              <TodayNoticeFullView>전체 보기</TodayNoticeFullView>
            </TodayNoticeTitileDiv>
            {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}
            <TodayNoticeContentDiv>
              오늘 영업 1시간 일찍 마감합니다!
            </TodayNoticeContentDiv>
          </TodayNoticeDiv>
          <BreakLine></BreakLine>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

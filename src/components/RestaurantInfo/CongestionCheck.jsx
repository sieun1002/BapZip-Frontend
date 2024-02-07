import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";

import {
  CongestionCheckWrapper,
  CongestionCheckDiv,
  CongestionMainPDiv,
  CongestionMainP1,
  CongestionP2,
  CongestionButtonDiv,
  CongestionButton,
  XImg,
} from "../../styles/RestaurantInfo/CongestionCheck.styled";
import X from "../../images/Login/X.svg";

export default function CongestionCheck() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <CongestionCheckWrapper>
            <CongestionCheckDiv>
              <CongestionMainPDiv>
                <CongestionMainP1>혼잡도 체크</CongestionMainP1>
                <XImg src={X} alt="X" />
              </CongestionMainPDiv>
              <CongestionP2>방문객과 비방문객 중 선택해주세요</CongestionP2>
              <CongestionButtonDiv>
                <CongestionButton type="button">비방문객</CongestionButton>
                <CongestionButton type="button">방문객</CongestionButton>
              </CongestionButtonDiv>
            </CongestionCheckDiv>
          </CongestionCheckWrapper>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

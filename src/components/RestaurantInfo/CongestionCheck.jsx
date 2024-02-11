import React, { useState } from "react";
import { useSignUp } from "../../context/SignUpContext";
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

export default function CongestionCheck({
  setCongestionCheck,
  setCongestionCheck2,
  setCongestionCheck3,
}) {
  const handleCongestionCheck2 = () => {
    setCongestionCheck(false);
    setCongestionCheck2(true);
  };

  const handleCongestionCheck3 = () => {
    setCongestionCheck(false);
    setCongestionCheck3(true);
  };

  const { congestion, setCongestion } = useSignUp();

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <CongestionCheckWrapper>
            <CongestionCheckDiv>
              <CongestionMainPDiv>
                <CongestionMainP1>혼잡도 체크</CongestionMainP1>
                <XImg
                  src={X}
                  alt="X"
                  onClick={() => setCongestionCheck(false)}
                />
              </CongestionMainPDiv>
              <CongestionP2>방문객과 비방문객 중 선택해주세요</CongestionP2>
              <CongestionButtonDiv>
                <CongestionButton
                  type="button"
                  onClick={() => {
                    handleCongestionCheck2();
                    setCongestion({ ...congestion, visitStatus: "NONVISIT" });
                  }}
                >
                  비방문객
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={() => {
                    handleCongestionCheck3();
                    setCongestion({ ...congestion, visitStatus: "VISIT" });
                  }}
                >
                  방문객
                </CongestionButton>
              </CongestionButtonDiv>
            </CongestionCheckDiv>
          </CongestionCheckWrapper>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

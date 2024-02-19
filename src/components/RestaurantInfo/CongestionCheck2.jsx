import React, { useState } from "react";
import { useSignUp } from "../../context/SignUpContext";
import api from "../../api/LoginTokenApi";
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
  CongestionMainPDiv2,
} from "../../styles/RestaurantInfo/CongestionCheck.styled";

import SavePoint from "./SavePoint";

import X from "../../images/Login/X.svg";

export default function CongestionCheck2({ setCongestionCheck2 }) {
  // 인원 수 선택 상태
  const [occupancyCount, setOccupancyCount] = useState(null);
  // 혼잡도 선택 상태
  const [congestionLevel, setCongestionLevel] = useState(null);
  const [point, setPoint] = useState(false);

  const { congestion, setCongestion } = useSignUp();

  const storeId = 5;

  // 혼잡도 API 호출 함수
  const congestionApi = async () => {
    try {
      const url = `https://babzip.seunga.shop/congestion/${storeId}`;
      const data = {
        congestionLevel: congestion.congestionLevel,
        visitStatus: congestion.visitStatus,
        occupancyCount: congestion.occupancyCount,
        waitTime: congestion.waitTime,
      };
      const response = await api.post(url, data);
      console.log("congestion successful", response.data.message);
    } catch (error) {
      console.error(
        "congestion error",
        error.response ? error.response.data : error
      );
    }
  };

  // 인원 수 선택 핸들러
  const handleOccupancyCountChange = (count) => {
    setOccupancyCount(count);
    setCongestion({ ...congestion, occupancyCount: count });
  };

  // 혼잡도 선택 핸들러
  const handleCongestionLevelChange = (level) => {
    setCongestionLevel(level);
    setCongestion({ ...congestion, congestionLevel: level });
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <CongestionCheckWrapper>
            <CongestionCheckDiv height="365px">
              <CongestionMainPDiv>
                <CongestionMainPDiv2>
                  <CongestionMainP1 color="#FFBA35">비방문객</CongestionMainP1>
                  <CongestionMainP1>혼잡도 체크</CongestionMainP1>
                </CongestionMainPDiv2>
                <XImg
                  src={X}
                  alt="X"
                  onClick={() => setCongestionCheck2(false)}
                />
              </CongestionMainPDiv>
              <CongestionP2>
                현재 식당의 대략적인 인원을 선택해주세요.
              </CongestionP2>
              <CongestionButtonDiv>
                {[10, 15, 20, 25].map((count) => (
                  <CongestionButton
                    key={count}
                    type="button"
                    onClick={() => handleOccupancyCountChange(count)}
                    backgroundColor={
                      occupancyCount === count ? "#ffba35" : "#FFFFFF"
                    }
                    color={occupancyCount === count ? "#ffffff" : "#767676"}
                  >
                    {count}명~
                  </CongestionButton>
                ))}
              </CongestionButtonDiv>

              <CongestionP2>이곳의 혼잡 정도를 평가해주세요.</CongestionP2>
              <CongestionButtonDiv>
                {["SPARSE", "MODERATE", "CROWDED"].map((level, index) => {
                  const buttonText = ["한가함", "보통", "혼잡함"][index];
                  return (
                    <CongestionButton
                      key={level}
                      type="button"
                      onClick={() => handleCongestionLevelChange(level)}
                      backgroundColor={
                        congestionLevel === level ? "#ffba35" : "#FFFFFF"
                      }
                      color={congestionLevel === level ? "#ffffff" : "#767676"}
                    >
                      {buttonText}
                    </CongestionButton>
                  );
                })}
              </CongestionButtonDiv>

              <CongestionMainPDiv></CongestionMainPDiv>
              <CongestionButtonDiv>
                <CongestionButton
                  type="button"
                  backgroundColor={
                    occupancyCount && congestionLevel ? "#ffba35" : "#FFFFFF"
                  }
                  color={
                    occupancyCount && congestionLevel ? "#ffffff" : "#767676"
                  }
                  onClick={() => {
                    congestionApi();
                    setPoint(true);
                  }}
                >
                  등록
                </CongestionButton>
              </CongestionButtonDiv>
            </CongestionCheckDiv>
          </CongestionCheckWrapper>
          {point ? (
            <SavePoint
              setPoint={setPoint}
              setCongestionCheck={setCongestionCheck2}
            />
          ) : null}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

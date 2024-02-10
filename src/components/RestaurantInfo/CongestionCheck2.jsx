import React, { useState } from "react";
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

import X from "../../images/Login/X.svg";

export default function CongestionCheck2({
  setCongestionCheck,
  setCongestionCheck2,
  setCongestionCheck3,
}) {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);
  const [button7, setButton7] = useState(false);
  const [button8, setButton8] = useState(false);

  const handleButton1 = () => {
    setButton1(!button1);
  };

  const handleButton2 = () => {
    setButton2(!button2);
  };

  const handleButton3 = () => {
    setButton3(!button3);
  };

  const handleButton4 = () => {
    setButton4(!button4);
  };

  const handleButton5 = () => {
    setButton5(!button5);
  };

  const handleButton6 = () => {
    setButton6(!button6);
  };

  const handleButton7 = () => {
    setButton7(!button7);
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
                <CongestionButton
                  type="button"
                  onClick={handleButton1}
                  backgroundColor={button1 ? "#ffba35" : "#FFFFFF"}
                  color={button1 ? "#ffffff" : "#767676"}
                >
                  10명~
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={handleButton2}
                  backgroundColor={button2 ? "#ffba35" : "#FFFFFF"}
                  color={button2 ? "#ffffff" : "#767676"}
                >
                  15명~
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={handleButton3}
                  backgroundColor={button3 ? "#ffba35" : "#FFFFFF"}
                  color={button3 ? "#ffffff" : "#767676"}
                >
                  20명~
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={handleButton4}
                  backgroundColor={button4 ? "#ffba35" : "#FFFFFF"}
                  color={button4 ? "#ffffff" : "#767676"}
                >
                  25명~
                </CongestionButton>
              </CongestionButtonDiv>

              <CongestionP2>이곳의 혼잡 정도를 평가해주세요.</CongestionP2>
              <CongestionButtonDiv>
                <CongestionButton
                  type="button"
                  onClick={handleButton5}
                  backgroundColor={button5 ? "#ffba35" : "#FFFFFF"}
                  color={button5 ? "#ffffff" : "#767676"}
                >
                  한가함
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={handleButton6}
                  backgroundColor={button6 ? "#ffba35" : "#FFFFFF"}
                  color={button6 ? "#ffffff" : "#767676"}
                >
                  보통
                </CongestionButton>
                <CongestionButton
                  type="button"
                  onClick={handleButton7}
                  backgroundColor={button7 ? "#ffba35" : "#FFFFFF"}
                  color={button7 ? "#ffffff" : "#767676"}
                >
                  혼잡함
                </CongestionButton>
              </CongestionButtonDiv>

              <CongestionMainPDiv></CongestionMainPDiv>
              <CongestionButtonDiv>
                <CongestionButton
                  type="button"
                  backgroundColor={
                    (button1 || button2 || button3 || button4) &&
                    (button5 || button6 || button7)
                      ? "#ffba35"
                      : "#FFFFFF"
                  }
                  color={
                    (button1 || button2 || button3 || button4) &&
                    (button5 || button6 || button7)
                      ? "#ffffff"
                      : "#767676"
                  }
                >
                  등록
                </CongestionButton>
              </CongestionButtonDiv>
            </CongestionCheckDiv>
          </CongestionCheckWrapper>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

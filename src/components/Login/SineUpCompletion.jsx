import { React, useState, useEffect } from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import {
  HeaderDiv,
  Submit,
  CircleImage,
} from "../../styles/Login/Login2.style";
import {
  LogoImage,
  LogoDiv,
  MainPDiv,
  MainP1,
  MainP2,
  AgreementDiv,
  LineDiv,
  DetailImage,
} from "../../styles/Login/SineUpCompletion.style";

import { Link } from "react-router-dom";

import logo from "../../images/Login/logo.svg";
import emptyCircle from "../../images/Login/emptyCircle.svg";
import checkCircle from "../../images/Login/checkCircle.svg";
import detail from "../../images/Login/detail.svg";

export default function SineUpCompletion() {
  const [Circle1, setCircle1] = useState(false);
  const [Circle2, setCircle2] = useState(false);
  const [Circle3, setCircle3] = useState(false);
  const [Circle4, setCircle4] = useState(false);
  const [AllCircle, setAllCircle] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const ClickEmptyCircle1 = () => {
    setCircle1(true);
  };
  const ClickEmptyCircle2 = () => {
    setCircle2(true);
  };
  const ClickEmptyCircle3 = () => {
    setCircle3(true);
  };
  const ClickEmptyCircle4 = () => {
    setCircle4(true);
  };

  const ClickEmptyAllCircle = () => {
    setAllCircle(true);
    setCircle1(true);
    setCircle2(true);
    setCircle3(true);
    setCircle4(true);
  };

  const ClickCheckCircle1 = () => {
    setCircle1(false);
  };
  const ClickCheckCircle2 = () => {
    setCircle2(false);
  };
  const ClickCheckCircle3 = () => {
    setCircle3(false);
  };
  const ClickCheckCircle4 = () => {
    setCircle4(false);
  };

  const ClickCheckAllCircle = () => {
    setAllCircle(false);
    setCircle1(false);
    setCircle2(false);
    setCircle3(false);
    setCircle4(false);
  };

  const CircleFunc1 = Circle1 ? ClickCheckCircle1 : ClickEmptyCircle1;
  const CircleFunc2 = Circle2 ? ClickCheckCircle2 : ClickEmptyCircle2;
  const CircleFunc3 = Circle3 ? ClickCheckCircle3 : ClickEmptyCircle3;
  const CircleFunc4 = Circle4 ? ClickCheckCircle4 : ClickEmptyCircle4;
  const AllCircleFunc = AllCircle ? ClickCheckAllCircle : ClickEmptyAllCircle;

  useEffect(() => {
    setAllCircle(Circle1 && Circle2 && Circle3 && Circle4);
  }, [Circle1, Circle2, Circle3, Circle4]);

  useEffect(() => {
    setIsSubmitActive(Circle1 && Circle2);
  }, [Circle1, Circle2]);

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <LogoDiv>
            <LogoImage src={logo} alt="logo" />
          </LogoDiv>
          <MainPDiv>
            <MainP1>조시은님,</MainP1>
            <MainP1>가입을 축하합니다.</MainP1>
            <MainP2 marginTop="20px">밥ZIP에 오신 걸 환영합니다.</MainP2>
            <MainP2>약관 동의 후 밥ZIP과 함께 편안한 식생활되세요!</MainP2>
          </MainPDiv>
          <AgreementDiv>
            <CircleImage
              onClick={AllCircleFunc}
              src={AllCircle ? checkCircle : emptyCircle}
              alt="emptyCircle"
            />
            약관 전체 동의
            <DetailImage src={detail} alt="detail" />
          </AgreementDiv>
          <LineDiv></LineDiv>
          <AgreementDiv>
            <CircleImage
              onClick={CircleFunc1}
              src={Circle1 ? checkCircle : emptyCircle}
              alt="emptyCircle"
            />
            (필수)이용약관 동의
            <DetailImage src={detail} alt="detail" />
          </AgreementDiv>
          <AgreementDiv>
            <CircleImage
              onClick={CircleFunc2}
              src={Circle2 ? checkCircle : emptyCircle}
              alt="emptyCircle"
            />
            (필수)개인정보 수집 및 이용동의
            <DetailImage src={detail} alt="detail" />
          </AgreementDiv>
          <AgreementDiv>
            <CircleImage
              onClick={CircleFunc3}
              src={Circle3 ? checkCircle : emptyCircle}
              alt="emptyCircle"
            />
            (선택)E-mail 및 SMS 광고성 정보 수신동의
            <DetailImage src={detail} alt="detail" />
          </AgreementDiv>
          <AgreementDiv>
            <CircleImage
              onClick={CircleFunc4}
              src={Circle4 ? checkCircle : emptyCircle}
              alt="emptyCircle"
            />
            (선택)위치기반 서비스 이용약관 동의
            <DetailImage src={detail} alt="detail" />
          </AgreementDiv>

          {isSubmitActive ? (
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Submit type="submit" value="시작하기" marginTop="80px" />
            </Link>
          ) : (
            <Submit
              backgroundColor="#EDEDED"
              type="submit"
              value="시작하기"
              style={{
                cursor: "default",
              }}
              marginTop="80px"
            />
          )}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

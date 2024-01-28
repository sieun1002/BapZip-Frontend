import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { HeaderDiv, Submit } from "../../styles/Login/Login2.style";
import {
  XImage,
  MainPDiv,
  MainP,
  Highlight,
  SearchBox,
  SearchImag,
  SearchBoxDiv,
  ExPDiv,
  ExP1,
  ExP2,
  CircleImgDiv,
  CircleImage,
  ArrowLeftImage,
} from "../../styles/Login/Select.style";

import { Link } from "react-router-dom";

import arrowLeft from "../../images/Login/arrowLeft.svg";
import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";

export default function SelectMajor() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv justifyContent="space-between">
            <Link to="/SineUp/Select_school">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </Link>

            <Link to="/SineUp">
              <XImage src={X} alt="X" />
            </Link>
          </HeaderDiv>

          <MainPDiv>
            <MainP></MainP>
            <MainP>
              어떤 <Highlight> 전공 </Highlight>이신가요?
            </MainP>
          </MainPDiv>

          <SearchBoxDiv>
            <SearchBox placeholder="전공명 검색" name="school_name" />
            <SearchImag src={search} alt="search" />
          </SearchBoxDiv>

          <ExPDiv>
            <ExP1>입력 예시</ExP1>
            <ExP2>컴퓨터공학전공 (O)</ExP2>
            <ExP2>컴공 (X)</ExP2>
          </ExPDiv>

          <CircleImgDiv>
            <CircleImage src={yellowCircle} />
            <CircleImage src={yellowCircle} />
          </CircleImgDiv>

          {/* <Submit
            type="submit"
            value="입력하기"
            backgroundColor="#EDEDED"
            marginBottom="30px"
          /> */}

          <Link
            to="/SineUp"
            style={{
              textDecoration: "none",
              marginBottom: "30px",
              cursor: "default",
            }}
          >
            <Submit type="submit" value="다음" />
          </Link>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

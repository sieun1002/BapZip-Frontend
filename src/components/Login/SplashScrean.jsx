import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  ContentDiv,
  LogoImage,
  MainP,
} from "../../styles/Login/SplashScrean.style";
import logo from "../../images/Login/logo.svg";

function SplashScrean() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <ContentDiv>
          <MainP>가고 싶은 식당을 한 곳에!</MainP>
          <LogoImage src={logo} alt="logo" />
        </ContentDiv>
      </WrapperDiv>
    </BodyDiv>
  );
}

export default SplashScrean;

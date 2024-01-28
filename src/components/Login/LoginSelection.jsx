import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  LogoImage,
  LogoDiv,
  FontDiv,
  Font1P,
  Font2P,
  MainBoxDiv,
  StyledLink,
  PersonImage,
  Font3P,
  Div,
} from "../../styles/Login/LoginSelection.style";
import logo from "../../images/Login/logo.svg";
import owner from "../../images/Login/owner.svg";
import customer from "../../images/Login/customer.svg";

export default function LoginSelection() {
  return (
    <BodyDiv>
      <WrapperDiv justifyContent="start">
        <Div>
          <LogoDiv>
            <LogoImage src={logo} alt="logo" />
          </LogoDiv>
          <FontDiv>
            <Font1P>어떻게 로그인하시겠어요?</Font1P>
            <Font2P>사장님/손님 중 택1</Font2P>
          </FontDiv>

          <MainBoxDiv>
            <StyledLink to="/Login2">
              <PersonImage src={owner} alt="owner" />
              <Font3P>{"사장님으로\n로그인하기"}</Font3P>
            </StyledLink>
            <StyledLink to="/Login2">
              <PersonImage src={customer} alt="customer" />
              <Font3P>{"손님으로\n로그인하기"}</Font3P>
            </StyledLink>
          </MainBoxDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyDiv = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  height: 100vh;
  ${flexCenter()}
`;

export const WrapperDiv = styled.div`
  width: 480px;
  /* height: 844px; */
  height: 100vh;
  background-color: #fff8ec;
  ${flexCenter()}/* border: solid 1px black; */
`;

export const ContentDiv = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: #00ffff37; */
  ${flexCenter()}
  flex-direction: column;
`;

export const MainP = styled.p`
  color: #ffba35;
  font-size: 18px;
`;

export const LogoImage = styled.img`
  width: 161px;
  height: 149px;
`;

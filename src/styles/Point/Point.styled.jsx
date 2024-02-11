import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyDiv = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  /* background-color: #ebebebea; */
  width: 100vw;
  height: auto;
  ${flexCenter()}
`;

export const WrapperDiv = styled.div`
  width: 480px;
  height: 100%;
  /* height: auto; */
  background-color: #ffffff;
  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: column;
  position: ${(props) => props.position};
  border-left: solid 1px black;
  border-right: solid 1px black;
`;

export const Div = styled.div`
  width: 480px;
  height: ${(props) => props.height || "100vh"};
  ${flexCenter()}
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
`;

export const HeaderDiv = styled.div`
  width: 420px;
  height: 66px;

  background-color: beige;
  ${flexCenter()}

  font-size: 18px;
  font-weight: 600;
  color: #191919;

  position: relative;
`;

export const ArrowLeftImage = styled.img`
  width: 26px;
  height: 26px;

  position: absolute;
  left: 0;
`;

export const MainPointImg = styled.img`
  width: 316px;
  height: 124.78px;
  border-radius: 10px;
  position: absolute;
`;

export const MainPointDiv = styled.div`
  width: 316px;
  height: 124.78px;
  border-radius: 10px;

  background-color: #ffba35;
  position: absolute;
`;

export const MainPointWrapper = styled.div`
  width: 316px;
  height: 124.78px;
  border-radius: 10px;

  position: relative;

  margin: 30px 0 60px 0;
`;

export const MainPointPDiv = styled.div`
  width: 316px;
  height: 124.78px;
  border-radius: 10px;

  position: absolute;
  ${flexCenter()}
  flex-direction: column;
`;

export const MainPointP1 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;

  margin: 0;
`;

export const MainPointP2 = styled.p`
  font-size: 44px;
  font-weight: 600;
  color: #ffffff;

  margin: 0;
`;

export const MenuDiv = styled.div`
  width: 480px;
  height: 50px;
  background-color: beige;

  display: flex;
`;

export const ManuButton = styled.div`
  width: 240px;
  height: 50px;

  border-bottom: solid 2px;
  border-bottom-color: ${(props) => props.color || "#D9D9D9"};

  font-size: 16px;
  font-weight: 500;
  /* text-align: center; */
  ${flexCenter()}

  color: ${(props) => props.color || "#767676"};
`;

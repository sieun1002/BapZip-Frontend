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
`;

export const RestaurantImage = styled.img`
  width: 480px;
  height: 316px;
`;

export const RestaurantMainInfoDiv = styled.div`
  width: 420px;
  height: 240px;
  background-color: #00ffff33;

  position: relative;
`;

export const RestaurantNameP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
`;

export const RestaurantCatagoryP = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
`;

export const WaitingAndStarDiv = styled.div`
  width: 420px;
  height: 31px;
  ${flexCenter()}
  justify-content: flex-start;
  background-color: #00ff2a7b;
`;

export const ClockImage = styled.img`
  width: 27px;
  height: 27px;
`;

export const WaitingStarP = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.color || "#191919"};
`;

export const StarImage = styled.img`
  width: 23px;
  height: 22px;
`;

export const GoodImage = styled.img`
  width: 31px;
  height: 31px;
`;

export const TagDiv = styled.div`
  width: 66px;
  height: 31px;
  ${flexCenter()};
  border: solid 1px #ffba35;
  border-radius: 40px;
  color: #ffba35;
`;

export const ScrapImage = styled.img`
  width: 31px;
  height: 31px;

  position: absolute;
  top: 15px;
  right: 0px;
`;

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

  padding-bottom: 50px;
`;

export const RestaurantImage = styled.img`
  width: 480px;
  height: 316px;
`;

export const RestaurantMainInfoDiv = styled.div`
  width: 420px;
  height: 240px;
  margin-bottom: 20px;
  /* background-color: #00ffff33; */

  position: relative;
`;

export const RestaurantNameP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin-bottom: 0;
`;

export const RestaurantCatagoryP = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  margin: 5px 0 20px 0;
`;

export const WaitingAndStarDiv = styled.div`
  width: 420px;
  height: 31px;
  ${flexCenter()}
  justify-content: flex-start;
  /* background-color: #00ff2a7b; */
  margin: 10px 0 10px 0;
`;

export const ClockImage = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 10px;
`;

export const WaitingStarP = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.color || "#191919"};
  margin-right: 5px;
`;

export const StarImage = styled.img`
  width: 23px;
  height: 22px;
  margin-right: 10px;
`;

export const GoodImage = styled.img`
  width: 31px;
  margin-right: 10px;
  height: 31px;
`;

export const TagDiv = styled.div`
  width: 66px;
  height: 31px;
  ${flexCenter()};
  border: solid 1px #ffba35;
  border-radius: 40px;
  color: #ffba35;
  margin-right: 15px;
`;

export const ScrapImage = styled.img`
  width: 31px;
  height: 31px;

  position: absolute;
  top: 15px;
  right: 0px;

  cursor: pointer;
`;

export const InfoNavDiv = styled.div`
  width: 480px;
  height: 52px;

  border-top: solid 4px #f6f6f6;
  ${flexCenter()}/* background-color: bisque; */
`;

export const InfoNav = styled.div`
  width: 120px;
  height: 50px;

  border-bottom: solid 2px;
  border-bottom-color: ${(props) => props.color || "#DBDBDB"};

  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.color || "#767676"};

  ${flexCenter()}; /* background-color: #c4ffcc32; */

  cursor: pointer;
`;

export const CongestionDiv = styled.div`
  width: 420px;
  height: 2px;
  display: flex;
  justify-content: flex-end;
`;

export const CongestionButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: #ffba35;
  ${flexCenter()}

  border-radius: 50%;
  border: 0px;

  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  color: #ffffff;
  position: fixed;
  bottom: 30px;

  box-shadow: 0 0 4px 0 #00000040;

  cursor: pointer;
`;

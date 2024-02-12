import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  width: 420px;
  height: 129px;
  left: 28px;
  top: 35px;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 0px 5px #dbdbdb;
  border-radius: 10px;

  margin: 0px 0 20px 0;
`;

export const ImageStyleFood = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 128px;
  height: 129px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const RankP = styled.p`
  position: absolute;
  left: 2.86%;
  right: 89.29%;
  top: -16%;
  bottom: 68.99%;
  z-index: 10;

  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const Rankimg = styled.img`
  position: absolute;
  left: 2.86%;
  right: 89.29%;
  top: 0%;
  bottom: 68.99%;
  z-index: 2;
`;

export const ImageStyleHuman = styled.img`
  position: absolute;
  left: 38%;
  top: 34%;
  width: 40px;
  height: 40px;
  border-radius: 10px;

  margin-right: 10px;
`;

export const AlarmImg = styled.img`
  position: absolute;
  left: 72%;
  top: 34%;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const TextPeople = styled.p`
  position: absolute;
  left: 50%;
  top: 21%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  color: ${(props) => props.color};
`;

export const TextMinute = styled.p`
  width: 80px;
  height: 40px;
  position: absolute;
  left: 79%;
  top: 21%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  color: ${(props) => props.color};
`;

export const MenuTxt = styled.p`
  position: absolute;
  left: 34.76%;
  /* right: 40.71%; */
  top: 1px;
  bottom: 71.32%;
  white-space: nowrap;
  margin-top: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #191919;
`;

export const WaitingPeople = styled.p`
  position: absolute;
  left: 40%;
  right: 41.67%;
  top: 65%;
  bottom: 9.3%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  color: #767676;
`;

export const EstimatedTime = styled.p`
  position: absolute;
  left: 78%;
  right: 41.67%;
  top: 65%;
  bottom: 9.3%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  color: #767676;
`;

export const RestaurantWrapper = styled.div`
  width: 420px;
  height: auto;

  margin-bottom: 60px;
`;

export const MenuDiv = styled.div`
  width: 480px;
  height: 50px;
  /* background-color: beige; */

  display: flex;

  margin-top: 40px;
`;

export const ManuButton = styled.div`
  width: 160px;
  height: 50px;

  border-bottom: solid 2px ${(props) => props.bottomColor || "#D9D9D9"};

  font-size: 16px;
  font-weight: 500;
  /* text-align: center; */
  ${flexCenter()}

  color: ${(props) => props.color || "#767676"};
`;

export const AdImg = styled.img`
  width: 480px;
  height: 150px;

  margin-top: 40px;
`;

export const ScrapImage = styled.img`
  width: 31px;
  height: 31px;

  position: absolute;
  top: 7px;
  right: 7px;

  cursor: pointer;
`;

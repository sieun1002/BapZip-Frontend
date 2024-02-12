import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 420px;
  height: 129px;
  left: 28px;
  top: 70px;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 0px 5px #dbdbdb;
  border-radius: 10px;

  margin: 20px 0 20px 0;
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
  left: 70%;
  top: 34%;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const TextPeople = styled.p`
  position: absolute;
  left: 48%;
  top: 21%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
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

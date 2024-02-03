import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullRateDiv = styled.div`
  width: 420px;
  height: 155px;
  /* background-color: beige; */
  /* padding: 40px 0 0 0; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
`;

export const StarDiv = styled.div`
  width: 95px;
  height: 112px;
  /* background-color: #00ffff38; */

  ${flexCenter()}
  flex-direction: column;
`;

export const StarImg = styled.img`
  width: 57px;
  height: 54px;
`;

export const StarP1 = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #191919;
  margin: 0;
`;

export const StarP2 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
  margin: 0;
`;

export const RateDiv = styled.div`
  width: 305px;
  height: 112px;
  border-left: 2px solid #dbdbdb;

  /* background-color: #0000ff46; */
`;

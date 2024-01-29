import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoDiv = styled.div`
  width: 420px;
  height: 340px;
  /* background-color: beige; */
`;

export const MainP1 = styled.p`
  color: #191919;
  font-size: 20px;
  font-weight: 600;
`;

export const Pdiv = styled.div`
  width: 420px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  /* background-color: #0000ff34; */
`;

export const TitleP = styled.p`
  width: 80px;
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 30px 0;
`;

export const ContentDiv = styled.div`
  width: 250px;
  height: 100%;

  /* background-color: #008b8b4a; */
`;

export const ContentP = styled.p`
  color: #767676;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const AddressImage = styled.img`
  width: 17px;
  height: 17px;
`;

export const BreakLine = styled.div`
  width: 480px;
  height: 4px;
  background-color: #f6f6f6;
`;

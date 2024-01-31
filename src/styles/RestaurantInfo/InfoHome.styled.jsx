import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoDiv = styled.div`
  width: 420px;
  /* height: 340px; */
  height: auto;
  /* background-color: beige; */
`;

export const InfoMainP1 = styled.p`
  color: #191919;
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;

export const InfoPdiv = styled.div`
  width: 420px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  /* background-color: #0000ff34; */
`;

export const InfoTitleP = styled.p`
  width: 80px;
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 30px 0;
`;

export const InfoContentDiv = styled.div`
  width: 250px;
  height: 100%;

  /* background-color: #008b8b4a; */
`;

export const InfoContentP = styled.p`
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
  margin: 40px 0;
`;

export const TodayNoticeDiv = styled.div`
  width: 420px;
  height: auto;

  /* background-color: #f5f570; */
`;

export const TodayNoticeTitileDiv = styled.div`
  width: 420px;
  height: 30px;
  ${flexCenter()};
  justify-content: space-between;
  margin-bottom: 40px;
  /* background-color: #ffc578; */
`;

export const TodayNoticeTitleP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
`;

export const TodayNoticeFullView = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
`;

export const TodayNoticeContentDiv = styled.div`
  width: 420px;
  height: auto;
  border: solid 1.5px #ffba35;
  border-radius: 10px;
  ${flexCenter()}

  padding: 25px 40px;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: 500;
  color: #191919;
`;

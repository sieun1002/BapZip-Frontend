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

export const MainTitleDiv = styled.div`
  width: 420px;
  height: 30px;
  /* background-color: beige; */
  position: relative;
  display: flex;
`;

export const MainTitleP1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  margin: 0;
  margin-right: 10px;
`;

export const MainTitleP2 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ffba35;
  margin: 0;
`;

export const ReviewContainer = styled.div`
  width: 420px;
  height: auto;

  margin-bottom: 40px;
`;

export const ReviewDiv = styled.div`
  width: 420px;
  height: auto;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 15px;
  box-sizing: border-box;

  margin: 20px 0 0 0;
`;

export const ReviewProfileDiv = styled.div`
  /* width: 200px; */
  width: 390px;
  height: 30px;
  /* background-color: #892be238; */
  display: flex;
  align-items: center;

  position: relative;
`;

export const ReviewProfileNotImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 10px;
`;

export const ReviewProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ReviewProfileName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #191919;
  margin: 0;
`;

export const ReviewStarDiv = styled.div`
  width: 250px;
  height: 22px;
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
  /* background-color: #a52a2a18; */
`;

export const ReviewStarImg = styled.img`
  width: 23px;
  height: 22px;
  margin-right: 5px;
`;

export const ReviewStarNum = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
  margin: 0;
`;

export const ReviewContentDiv = styled.div`
  width: 390px;
  height: auto;
  /* background-color: #82eeee58; */

  font-size: 14px;
  font-weight: 500;
  color: #191919;
  line-height: 19.07px;

  margin-bottom: 10px;
`;

export const ReviewImg = styled.img`
  width: 140px;
  height: 140px;

  margin-bottom: 10px;
`;

export const ReviewDate = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
  margin: 0;
`;

export const ReviewWriteImg = styled.img`
  width: 31px;
  height: 31px;

  position: absolute;
  right: 0;
`;

export const HeartImg = styled.img`
  width: 37px;
  height: 37px;

  position: absolute;
  right: 5px;
  top: 5px;

  cursor: pointer;
`;

export const NoneReviewDiv = styled.div`
  margin: 20px 0 0 0;
  width: 420px;
  height: 130px;
  background-color: #f6f6f6;
  border-radius: 10px;

  ${flexCenter()}
  text-align: center;

  font-size: 16px;
  font-weight: 600;
  color: #767676;
`;

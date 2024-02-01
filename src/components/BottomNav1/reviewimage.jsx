import React from "react";
import styled from "styled-components";
import review1 from "../../images/BottomNav1/review.svg";
import Today1 from "../../images/BottomNav1/todayplace1.svg";

const ReviewImage = styled.img`
  max-width: 100%; /* 변경: 너비 100%로 설정 */
  max-height: 150px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: block; /* 변경: 가운데 정렬을 위해 추가 */
`;

const ReviewContainer = styled.div`
  max-width: 600px; /* 변경: 원하는 최대 너비로 설정 */
  margin: 50px auto; /* 변경: 상하 여백을 조절하고 수평 가운데 정렬을 위해 auto 추가 */
`;

const ReviewContainer1 = styled.div`
  max-width: 600px; /* 변경: 원하는 최대 너비로 설정 */
  margin: 50px auto; /* 변경: 상하 여백을 조절하고 수평 가운데 정렬을 위해 auto 추가 */
  margin-right: 270px;
`;

const Reviewimage = () => {
  return (
    <ReviewContainer>
      <ReviewImage src={review1} alt="Image 8" />
      <ReviewContainer1>
        <ReviewImage src={Today1} alt="Image 8" />
      </ReviewContainer1>
    </ReviewContainer>
  );
};

export default Reviewimage;

import React, { useState, useRef } from "react";
import styled from "styled-components";
import A1 from "../../images/BottomNav1/Group 476.svg";
import A2 from "../../images/BottomNav1/Group 477.svg";
import A3 from "../../images/BottomNav1/Group 478.svg";
import A4 from "../../images/BottomNav1/Group 481.svg";
import review1 from "../../images/BottomNav1/review.svg";

const SliderContainer = styled.div`
  max-width: 420px; /* 변경: 너비 100%로 설정 */
  max-height: 216px;
  overflow: hidden;
  margin: 0 auto; /* 변경: 중앙 정렬 및 상대적인 margin 값으로 변경 */
  margin-top: 350px;
`;

const ImageSlider = styled.div`
  display: flex;
  max-width: 300px; /* Set your desired maximum width */
  margin: 0 auto; /* Center the slider */
  transition: transform 0.3s ease;
`;

const SlideImage = styled.img`
  max-width: 100%; /* 변경: 이미지 너비 100%로 설정 */
  height: auto; /* 변경: 이미지 높이 자동 조정 */
`;

const ReviewImage = styled.img`
  position: relative;
  width: 200px; /* 조정된 너비 */
  height: 199px;
`;

const ImageSliderComponent = () => {
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [translate, setTranslate] = useState(0);

  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart(e.clientX - sliderRef.current.getBoundingClientRect().left);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const clientX =
        e.clientX - sliderRef.current.getBoundingClientRect().left;
      const delta = clientX - dragStart;
      setTranslate((prevTranslate) => prevTranslate + delta);
      setDragStart(clientX);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <ImageSlider style={{ transform: `translateX(${translate}px)` }}>
        <SlideImage src={A1} alt="Image 1" />
        <SlideImage src={A2} alt="Image 2" />
        <SlideImage src={A3} alt="Image 3" />
        <SlideImage src={A4} alt="Image 4" />
        <SlideImage src={A4} alt="Image 5" />
        <SlideImage src={A4} alt="Image 6" />
        <SlideImage src={A4} alt="Image 7" />
        <SlideImage src={A4} alt="Image 8" />
        {/* Add more images as needed */}
      </ImageSlider>
      <ReviewImage src={review1} alt="Image 8" />
    </SliderContainer>
  );
};

export default ImageSliderComponent;

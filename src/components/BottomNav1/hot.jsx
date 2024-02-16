import React, { useState, useRef } from "react";
import styled from "styled-components";
import A1 from "../../images/BottomNav1/Group 476.svg";
import A2 from "../../images/BottomNav1/Group 477.svg";
import A3 from "../../images/BottomNav1/Group 478.svg";
import A4 from "../../images/BottomNav1/Group 481.svg";
import review1 from "../../images/BottomNav1/review.svg";

const SliderContainer = styled.div`
  max-width: 420px;
  max-height: 216px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 350px;
  cursor: grab;
`;

const ImageSlider = styled.div`
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  & > * {
    margin-right: 15px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ReviewImage = styled.img`
  position: relative;
  width: 200px;
  height: 199px;
`;

const ImageSliderComponent = () => {
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [sliderTransform, setSliderTransform] = useState(0);

  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const dragDistance = event.clientX - dragStartX;
      setSliderTransform(sliderTransform + dragDistance);
      setDragStartX(event.clientX);
      sliderRef.current.style.transform = `translateX(${sliderTransform}px)`;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <SliderContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ImageSlider
        ref={sliderRef}
        style={{ transform: `translateX(${sliderTransform}px)` }}
      >
        <SlideImage src={A1} alt="Image 1" />
        <SlideImage src={A2} alt="Image 2" />
        <SlideImage src={A3} alt="Image 3" />
        <SlideImage src={A4} alt="Image 4" />
        <SlideImage src={A4} alt="Image 5" />
        <SlideImage src={A4} alt="Image 6" />
        <SlideImage src={A4} alt="Image 7" />
        <SlideImage src={A4} alt="Image 8" />
      </ImageSlider>
      <ReviewImage src={review1} alt="Review Image" />
    </SliderContainer>
  );
};

export default ImageSliderComponent;

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import { BreakLine } from "../../styles/RestaurantInfo/InfoHome.styled";
// import Hot from "../components/BottomNav1/hot";
import Hot from "../BottomNav1/hot";

import {
  SliderContainer,
  ImageSlider,
  SlideImage,
  MenuPanDiv,
  MenuPanP,
} from "../../styles/RestaurantInfo/InfoMenu.styled";

import A1 from "../../images/BottomNav1/Group 476.svg";
import A2 from "../../images/BottomNav1/Group 477.svg";
import A3 from "../../images/BottomNav1/Group 478.svg";
import A4 from "../../images/BottomNav1/Group 481.svg";

export default function InfoHome() {
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
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <MenuPanDiv>
            <MenuPanP>메뉴판</MenuPanP>
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
            </SliderContainer>
          </MenuPanDiv>
          <BreakLine></BreakLine>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import { BreakLine } from "../../styles/RestaurantInfo/InfoHome.styled";
import Hot from "../BottomNav1/hot";

import {
  SliderContainer,
  ImageSlider,
  SlideImage,
  MenuPanDiv,
  MainP,
  NotMenuDiv,
  MenuListDiv,
  SignatureAndFullDiv,
  MenuListPDiv,
  MenuListP1,
  MenuListP2,
  MenuListP3,
  MenuList,
  MenuListImg,
} from "../../styles/RestaurantInfo/InfoMenu.styled";

import A1 from "../../images/BottomNav1/Group 476.svg";
import A2 from "../../images/BottomNav1/Group 477.svg";
import A3 from "../../images/BottomNav1/Group 478.svg";
import A4 from "../../images/BottomNav1/Group 481.svg";

import menuList from "../../images/RestaurantInfo/menuList.svg";

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
            <MainP>메뉴판</MainP>
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
              </ImageSlider>
            </SliderContainer>
          </MenuPanDiv>

          {/* <MenuPanDiv>
            <MainP>메뉴판</MainP>
            <NotMenuDiv>등록된 메뉴판 사진이 없어요.</NotMenuDiv>
          </MenuPanDiv> */}
          <BreakLine></BreakLine>
          <MenuListDiv>
            <MainP marginTop="0px">대표 메뉴</MainP>
            <SignatureAndFullDiv>
              {/* 벡 반복문 사용 */}
              <MenuList>
                <MenuListPDiv>
                  <MenuListP1>한끼 분식 세트</MenuListP1>
                  <MenuListP2>
                    떡볶이 + 순대 + 어묵꼬치 1개로 구성된 한끼 식사입니다~
                  </MenuListP2>
                  <MenuListP3>8,500원</MenuListP3>
                </MenuListPDiv>
                <MenuListImg src={menuList} alt="menuList" />
              </MenuList>

              <MenuList>
                <MenuListPDiv>
                  <MenuListP1>한끼 분식 세트</MenuListP1>
                  <MenuListP2>
                    떡볶이 + 순대 + 어묵꼬치 1개로 구성된 한끼 식사입니다~
                  </MenuListP2>
                  <MenuListP3>8,500원</MenuListP3>
                </MenuListPDiv>
              </MenuList>
            </SignatureAndFullDiv>
            <MainP>식사</MainP>
            <SignatureAndFullDiv>
              {/* 벡 반복문 사용 */}
              <MenuList>
                <MenuListPDiv>
                  <MenuListP1>한끼 분식 세트</MenuListP1>
                  <MenuListP2>
                    떡볶이 + 순대 + 어묵꼬치 1개로 구성된 한끼 식사입니다~
                  </MenuListP2>
                  <MenuListP3>8,500원</MenuListP3>
                </MenuListPDiv>
              </MenuList>

              <MenuList>
                <MenuListPDiv>
                  <MenuListP1>한끼 분식 세트</MenuListP1>
                  <MenuListP2>
                    떡볶이 + 순대 + 어묵꼬치 1개로 구성된 한끼 식사입니다~
                  </MenuListP2>
                  <MenuListP3>8,500원</MenuListP3>
                </MenuListPDiv>
              </MenuList>

              <MenuList>
                <MenuListPDiv>
                  <MenuListP1>한끼 분식 세트</MenuListP1>
                  <MenuListP2>
                    떡볶이 + 순대 + 어묵꼬치 1개로 구성된 한끼 식사입니다~
                  </MenuListP2>
                  <MenuListP3>8,500원</MenuListP3>
                </MenuListPDiv>
              </MenuList>
            </SignatureAndFullDiv>
          </MenuListDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

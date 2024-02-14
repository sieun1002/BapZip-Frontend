import React, { useState, useRef, useEffect } from "react";
import api from "../../api/LoginTokenApi";
import { useParams } from "react-router-dom";
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

  const [menuPan, setMenuPan] = useState([]);
  const [signatureMenu, setSignatureMenu] = useState([]);

  //URL에서 storeId 추출
  const { storeId } = useParams();

  useEffect(() => {
    const manuPanApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/printedMenu`;

        const response = await api.get(url);
        setMenuPan(response.data.result);
        // console.log(response.data.result);
        // console.log(menuPan);
      } catch (error) {
        console.error("메뉴판 가져오기 실패", error);
      }
    };

    const signatureMenunApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/stores/${storeId}/menu`;

        const response = await api.get(url);
        setSignatureMenu(response.data.result);
        // console.log(response.data.result);
        console.log(signatureMenu);
      } catch (error) {
        console.error("메뉴판 가져오기 실패", error);
      }
    };

    manuPanApi();
    signatureMenunApi();
  }, [storeId]);

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <MenuPanDiv>
            <MainP>메뉴판</MainP>

            {menuPan.length === 0 ? (
              <NotMenuDiv>등록된 메뉴판 사진이 없어요.</NotMenuDiv>
            ) : (
              <SliderContainer
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <ImageSlider
                  style={{ transform: `translateX(${translate}px)` }}
                >
                  {menuPan.map((img, index) => (
                    <SlideImage key={index} src={img.imageUrl} alt="Image 1" />
                  ))}
                </ImageSlider>
              </SliderContainer>
            )}
          </MenuPanDiv>

          <BreakLine marginBottom="0"></BreakLine>
          <MenuListDiv>
            {signatureMenu.map((group, groupIndex) => (
              <>
                <MainP key={groupIndex}>{group[0].groupName}</MainP>
                <SignatureAndFullDiv>
                  {group.map((menuList, menuListIndex) => (
                    <MenuList key={menuListIndex}>
                      <MenuListPDiv>
                        <MenuListP1>{menuList.menuName}</MenuListP1>
                        <MenuListP2>{menuList.explanation}</MenuListP2>
                        <MenuListP3>{menuList.price}원</MenuListP3>
                      </MenuListPDiv>
                      {menuList.imageURL !== null ? (
                        <MenuListImg src={menuList.imageURL} alt="menuList" />
                      ) : null}
                    </MenuList>
                  ))}
                </SignatureAndFullDiv>
              </>
            ))}
          </MenuListDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

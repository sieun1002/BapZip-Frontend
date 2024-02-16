import React, { useState, useRef, useEffect } from "react";

import api from "../../api/LoginTokenApi";
import styled from "styled-components";
import review1 from "../../images/BottomNav1/review.svg";
import smallStar from "../../images/RestaurantInfo/smallStar.svg";
import rank from "../../images/WaitingRank/Rank.svg";

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
  max-width: 450px;
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
  width: 166px;
  height: 166px;
  border-radius: 10px;

  object-fit: fill;
`;

const RankImageDiv = styled.div`
  width: 53px;
  height: 40px;

  position: absolute;
`;

const RankImage = styled.img`
  width: 53px;
  height: 40px;
`;

const RankP = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;

  position: absolute;
  left: 22px;
  top: -18px;
`;

const SlideImageDiv = styled.div`
  width: 166px;
  height: 166px;
  border-radius: 10px;

  position: relative;
`;

const SlideDiv = styled.div`
  width: 166px;
  height: 216px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: beige; */
`;

const SlideBottomDiv = styled.div`
  width: 166px;
  height: 40px;

  display: flex;
  justify-content: space-between;

  /* background-color: azure; */
`;

const SlidePDiv = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* background-color: #0000ff53; */
`;

const SlideP1 = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #191919;

  margin: 0;
`;

const SlideP2 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;

  margin: 0;
`;

const SlideRateDiv = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: #0000ff53; */
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

  const [hots, setHots] = useState([]);

  useEffect(() => {
    const hotApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/hotPlace`;

        const response = await api.get(url);
        setHots(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("메뉴판 가져오기 실패", error);
      }
    };

    hotApi();
  }, []);

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
        {/* <SlideImage src={A1} alt="Image 1" /> */}
        {hots.map((hot, index) => (
          <SlideDiv>
            <SlideImageDiv>
              <RankImageDiv>
                <RankP>{index + 1}</RankP>
                <RankImage src={rank} />
              </RankImageDiv>

              <SlideImage key={index} src={hot.imageUrl} alt={hot.storeId} />
            </SlideImageDiv>

            <SlideBottomDiv>
              <SlidePDiv>
                <SlideP1>{hot.name}</SlideP1>
                <SlideP2>
                  {hot.category} · {hot.inOut}
                </SlideP2>
              </SlidePDiv>
              <SlideRateDiv>
                <img
                  style={{
                    width: "15.76px",
                    height: "15.28px",
                    margin: "4px 0 3px 0 ",
                  }}
                  src={smallStar}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#191919",
                    margin: "0",
                  }}
                >
                  {hot.score}
                </p>
              </SlideRateDiv>
            </SlideBottomDiv>
          </SlideDiv>
        ))}
      </ImageSlider>
      <ReviewImage src={review1} alt="Review Image" />
    </SliderContainer>
  );
};

export default ImageSliderComponent;

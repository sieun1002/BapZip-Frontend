import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

import api from "../../api/LoginTokenApi";
import styled from "styled-components";
import smallStar from "../../images/RestaurantInfo/smallStar.svg";
import rank from "../../images/WaitingRank/Rank.svg";

const Container = styled.div`
  max-width: 420px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 305px;
  cursor: grab;

  /* background-color: #eded3e; */
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
  display: flex;
  justify-content: center;
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
  /* left: 22px; */
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* background-color: #0000ff53; */
`;

const ReviewImage = styled.img`
  position: relative;
  width: 200px;
  height: 199px;
`;

const ImageSliderComponent = () => {
  const [hots, setHots] = useState([]);
  const schoolId = localStorage.getItem("schoolId");
  console.log(schoolId);

  useEffect(() => {
    const hotApi = async () => {
      try {
        const url = `https://babzip.seunga.shop/stores/hotPlace?schoolId=${schoolId}`;

        const response = await api.get(url);
        setHots(response.data.result);
        console.log("hotApi", response.data.result);
      } catch (error) {
        console.error("메뉴판 가져오기 실패", error);
      }
    };

    hotApi();
  }, [schoolId]);

  return (
    <Container>
      {/* <ImageWrapper> */}
      <Swiper
        spaceBetween={115}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ margin: "0" }}
      >
        {hots.map((hot, index) => (
          <SwiperSlide>
            <Link
              to={`/RestaurantInfo/${hot.storeId}`}
              state={{
                preLink: "/Review",
                restaurantPreLink: "/home",
              }}
              style={{ textDecoration: "none" }}
            >
              <SlideDiv>
                <SlideImageDiv>
                  <RankImageDiv>
                    <RankP>{index + 1}</RankP>
                    <RankImage src={rank} />
                  </RankImageDiv>

                  <SlideImage
                    key={index}
                    src={hot.imageUrl}
                    alt={hot.storeId}
                  />
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
                        width: "20px",
                        height: "20px",
                        margin: "3px 0 2px 0 ",
                      }}
                      src={smallStar}
                    />
                    <p
                      style={{
                        fontSize: "13px",
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </ImageWrapper> */}
    </Container>
  );
};

export default ImageSliderComponent;

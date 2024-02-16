import React, { useState, useEffect, useRef } from "react";
import api from "../api/LoginTokenApi";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  BodyDiv,
  WrapperDiv,
  Div,
  RestaurantImage,
  RestaurantMainInfoDiv,
  RestaurantNameP,
  RestaurantCatagoryP,
  WaitingAndStarDiv,
  ClockImage,
  WaitingStarP,
  StarImage,
  GoodImage,
  TagDiv,
  ScrapImage,
  InfoNavDiv,
  InfoNav,
  CongestionDiv,
  CongestionButton,
} from "../styles/RestaurantInfo/RestaurantInfo.styled";
import clock from "../images/RestaurantInfo/clock.svg";
import star from "../images/RestaurantInfo/star.svg";
import good from "../images/RestaurantInfo/good.svg";
import nonScrapImg from "../images/RestaurantInfo/noneScrap.svg";
import ScrapImg from "../images/RestaurantInfo/scrap1.svg";
import whiteArrowLeftImg from "../images/RestaurantInfo/whiteArrowLeft.svg";

import InfoHome from "../components/RestaurantInfo/InfoHome";
import InfoMenu from "../components/RestaurantInfo/InfoMenu";
import InfoReview from "../components/RestaurantInfo/InfoReview";
import InfoChat from "../components/RestaurantInfo/InfoChat";
import CongestionCheck from "../components/RestaurantInfo/CongestionCheck";
import CongestionCheck2 from "../components/RestaurantInfo/CongestionCheck2";
import CongestionCheck3 from "../components/RestaurantInfo/CongestionCheck3";

export default function RestaurantInfo() {
  const [scrap, setScrap] = useState();

  //가게 기본 정보 api 연결
  const [restaurantInfo, setRestaurantInfo] = useState({});
  //URL에서 storeId 추출
  const { storeId } = useParams();

  useEffect(() => {
    const basicRestaurantInfoApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/info`;

        const response = await api.get(url);
        setRestaurantInfo(response.data.result);
        setScrap(response.data.result.bookmark);
        console.log(response.data.result);
      } catch (error) {
        console.error("가게 정보 가져오기 실패", error);
      }
    };

    basicRestaurantInfoApi();
  }, [storeId]);

  //가게 zip 하기
  const addStoreScrapApi = async () => {
    try {
      // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/info`;
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/zip?storeId=${storeId}`;

      const response = await api.post(url);
      // 리뷰 좋아요 성공 처리
      console.log("addCtoreScrap successful", response.data.isSuccess);
      setScrap(true);
    } catch (error) {
      console.error("가게 scrap 실패", error);
    }
  };

  //가게 zip 해제 하기
  const deleteStoreScrapApi = async () => {
    try {
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/deleteZip?storeId=${storeId}`;

      const response = await api.delete(url);
      // 가게 스크랩 해제  성공 처리
      console.log("deleteCtoreScrap successful", response.data.isSuccess);
      setScrap(false);
    } catch (error) {
      console.error("가게 scrap 해제 실패", error);
    }
  };

  // 'home', 'menu', 'review', 'chat' 중 하나를 현재 상태로 관리합니다.
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("");
  const [restaurantPreLink, setrestaurantPreLink] = useState("#");

  useEffect(() => {
    if (location.state?.navBar) {
      setCurrentTab(location.state.navBar);
    } else {
      setCurrentTab("home");
    }

    if (location.state?.restaurantPreLink) {
      setrestaurantPreLink(location.state?.restaurantPreLink);
    } else {
      setrestaurantPreLink("#");
    }
  }, [location.state]);

  //CongestionCheck 상태 관리
  const [congestionCheck, setCongestionCheck] = useState(false);
  const [congestionCheck2, setCongestionCheck2] = useState(false);
  const [congestionCheck3, setCongestionCheck3] = useState(false);

  // 현재 선택된 탭에 따라 보여질 컴포넌트를 결정하는 함수
  const renderTabComponent = () => {
    switch (currentTab) {
      case "home":
        return <InfoHome />;
      case "menu":
        return <InfoMenu />;
      case "review":
        return <InfoReview />;
      case "chat":
        return <InfoChat />;
      default:
        return <InfoHome />;
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Link to={restaurantPreLink}>
              <img
                src={whiteArrowLeftImg}
                alt="whiteArrowLeftImg"
                style={{ position: "absolute", top: "20px", left: "25px" }}
              />
            </Link>

            <RestaurantImage
              src={restaurantInfo.images?.[0]}
              alt="restaurant"
            />
          </div>

          <RestaurantMainInfoDiv>
            {scrap === true ? (
              <ScrapImage
                src={ScrapImg}
                alt="scrapImg"
                onClick={() => {
                  deleteStoreScrapApi();
                }}
              />
            ) : (
              <ScrapImage
                src={nonScrapImg}
                alt="nonScrap"
                onClick={() => {
                  addStoreScrapApi();
                }}
              />
            )}

            <RestaurantNameP>
              {restaurantInfo.name} - {restaurantInfo.category}
            </RestaurantNameP>

            <RestaurantCatagoryP>{restaurantInfo.inOrOut}</RestaurantCatagoryP>

            <WaitingAndStarDiv>
              <ClockImage src={clock} alt="clock" />
              <WaitingStarP>웨이팅 예산 시간: </WaitingStarP>
              {restaurantInfo.waitTime === null ? (
                <WaitingStarP color="#E32525">0분</WaitingStarP>
              ) : (
                <WaitingStarP color="#E32525">
                  {restaurantInfo.waitTime}분
                </WaitingStarP>
              )}
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <StarImage src={star} alt="star" />
              <WaitingStarP>{restaurantInfo.score} / 5</WaitingStarP>
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <GoodImage src={good} alt="good" />
              {restaurantInfo.hashtag &&
                restaurantInfo.hashtag.map((tag, index) => (
                  <TagDiv key={index}>#{tag}</TagDiv>
                ))}
            </WaitingAndStarDiv>
          </RestaurantMainInfoDiv>
          <InfoNavDiv>
            <InfoNav
              color={currentTab === "home" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("home")}
            >
              홈
            </InfoNav>
            <InfoNav
              color={currentTab === "menu" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("menu")}
            >
              메뉴
            </InfoNav>
            <InfoNav
              color={currentTab === "review" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("review")}
            >
              리뷰
            </InfoNav>
            <InfoNav
              color={currentTab === "chat" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("chat")}
            >
              실시간 채팅
            </InfoNav>
          </InfoNavDiv>
          {renderTabComponent()}

          <CongestionDiv>
            <CongestionButton
              type="button"
              onClick={() => setCongestionCheck(true)}
            >
              혼잡도 <br />
              등록
            </CongestionButton>
          </CongestionDiv>
          {congestionCheck && true ? (
            <CongestionCheck
              setCongestionCheck={setCongestionCheck}
              setCongestionCheck2={setCongestionCheck2}
              setCongestionCheck3={setCongestionCheck3}
            />
          ) : null}

          {congestionCheck2 && true ? (
            <CongestionCheck2
              setCongestionCheck={setCongestionCheck}
              setCongestionCheck2={setCongestionCheck2}
              setCongestionCheck3={setCongestionCheck3}
            />
          ) : null}

          {congestionCheck3 && true ? (
            <CongestionCheck3
              setCongestionCheck={setCongestionCheck}
              setCongestionCheck2={setCongestionCheck2}
              setCongestionCheck3={setCongestionCheck3}
            />
          ) : null}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

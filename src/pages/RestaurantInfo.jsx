import React, { useState, useEffect, useRef } from "react";
import api from "../api/LoginTokenApi";
import { useParams } from "react-router-dom";
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
import restaurant from "../images/RestaurantInfo/restaurant.svg";
import clock from "../images/RestaurantInfo/clock.svg";
import star from "../images/RestaurantInfo/star.svg";
import good from "../images/RestaurantInfo/good.svg";
import scrap from "../images/RestaurantInfo/scrap.svg";

import InfoHome from "../components/RestaurantInfo/InfoHome";
import InfoMenu from "../components/RestaurantInfo/InfoMenu";
import InfoReview from "../components/RestaurantInfo/InfoReview";
import InfoChat from "../components/RestaurantInfo/InfoChat";
import CongestionCheck from "../components/RestaurantInfo/CongestionCheck";
import CongestionCheck2 from "../components/RestaurantInfo/CongestionCheck2";
import CongestionCheck3 from "../components/RestaurantInfo/CongestionCheck3";

export default function RestaurantInfo() {
  //가게 기본 정보 api 연결
  const [restaurantInfo, setRestaurantInfo] = useState({});
  //URL에서 storeId 추출
  // const {storeId} = useParams();
  const { storeId } = 5;

  useEffect(() => {
    const basicRestaurantInfoApi = async () => {
      try {
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/info`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/5/info`;

        const response = await api.get(url);
        setRestaurantInfo(response.data.result);
      } catch (error) {
        console.error("가게 정보 가져오기 실패", error);
      }
    };
    basicRestaurantInfoApi();
  }, [storeId]);

  // 'home', 'menu', 'review', 'chat' 중 하나를 현재 상태로 관리합니다.
  const [currentTab, setCurrentTab] = useState("home");

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
          <RestaurantImage src={restaurant} alt="restaurant" />
          <RestaurantMainInfoDiv>
            <ScrapImage src={scrap} alt="scrap" />
            <RestaurantNameP>{restaurantInfo.name}</RestaurantNameP>

            {/*벡 정보 가져와야 함*/}
            {/* <RestaurantCatagoryP>학식당 · 교내</RestaurantCatagoryP> */}
            <RestaurantCatagoryP>{restaurantInfo.inOrOut}</RestaurantCatagoryP>

            <WaitingAndStarDiv>
              <ClockImage src={clock} alt="clock" />
              <WaitingStarP>웨이팅 예산 시간: </WaitingStarP>
              {/*벡 정보 가져와야 함*/}
              <WaitingStarP color="#E32525">70분</WaitingStarP>
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <StarImage src={star} alt="star" />
              {/*벡 정보 가져와야 함*/}
              <WaitingStarP>4.8 / 5</WaitingStarP>
            </WaitingAndStarDiv>
            <WaitingAndStarDiv>
              <GoodImage src={good} alt="good" />
              {/*벡 정보 가져와야 함. 반복문 써야할 듯*/}
              <TagDiv>#혼밥</TagDiv>
              <TagDiv>#빠름</TagDiv>
              <TagDiv>#맛있음</TagDiv>
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

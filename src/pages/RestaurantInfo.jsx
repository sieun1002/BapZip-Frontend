import React, { useState } from "react";
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

export default function RestaurantInfo() {
  // 'home', 'menu', 'review', 'chat' 중 하나를 현재 상태로 관리합니다.
  const [currentTab, setCurrentTab] = useState("home");

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
            {/*벡 정보 가져와야 함*/}
            <RestaurantNameP>학식당 - 분식</RestaurantNameP>
            {/*벡 정보 가져와야 함*/}
            <RestaurantCatagoryP>학식당 · 교내</RestaurantCatagoryP>
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
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

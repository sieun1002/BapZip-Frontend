import React, { useState, useRef, useEffect } from "react";
import api from "../../api/LoginTokenApi";
import { useLocation } from "react-router-dom";

import Header from "../ListIn/Header";
import SearchBar from "../ListIn/Searchbar";
import RstaurantList from "./RstaurantList";

import {
  RestaurantWrapper,
  MenuDiv,
  ManuButton,
  AdImg,
} from "../../styles/WaitingRank/WaringRank.styled";

import Ad1 from "../../images/WaitingRank/Ad1.svg";

export default function WaitingRank(props) {
  const location = useLocation();
  const title = "실시간 웨이팅 랭킹";
  const [currentTab, setCurrentTab] = useState("");
  const [honjapPreLink, setHonjapPreLink] = useState("#");
  const [placeholder, setPlaceholder] = useState("내가 가고싶은 식당은?");

  useEffect(() => {
    if (location.state?.navBar) {
      setCurrentTab(location.state.navBar);
      if (location.state.navBar === "ALL") {
        setPlaceholder("내가 가고 싶은 식당은?");
      } else if (location.state.navBar === "IN") {
        setPlaceholder("교내에서 내가 가고 싶은 식당은?");
      } else {
        setPlaceholder("교외에서 내가 가고 싶은 식당은?");
      }
    } else {
      setCurrentTab("ALL");
      setPlaceholder("내가 가고싶은 식당은?");
    }

    if (location.state?.honjapPreLink) {
      setHonjapPreLink(location.state?.honjapPreLink);
    } else {
      setHonjapPreLink("#");
    }
  }, [location.state]);

  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const classification = currentTab;

  const schoolId = localStorage.getItem("schoolId");

  useEffect(() => {
    const AllRestaurantListApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/congestion/ranking?classification=${classification}&schoolId=${schoolId}`;

        const response = await api.get(url);
        setAllRestaurantList(response.data.result);
        console.log(response.data.result);

        console.log(allRestaurantList);
      } catch (error) {
        console.error("혼잡도 랭킹 api 가져오기 실패", error);
      }
    };

    AllRestaurantListApi();
  }, [currentTab]);

  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Header title={title} honjapPreLink={honjapPreLink} />
        <SearchBar placeholder={placeholder} />

        <MenuDiv>
          <ManuButton
            color={currentTab === "ALL" ? "#FFBA35" : undefined}
            bottomColor={currentTab === "ALL" ? "#FFBA35" : undefined}
            onClick={() => {
              setCurrentTab("ALL");
              setPlaceholder("내가 가고 싶은 식당은?");
            }}
          >
            전체
          </ManuButton>
          <ManuButton
            color={currentTab === "IN" ? "#FFBA35" : undefined}
            bottomColor={currentTab === "IN" ? "#FFBA35" : undefined}
            onClick={() => {
              setCurrentTab("IN");
              setPlaceholder("교내에서 내가 가고 싶은 식당은?");
            }}
          >
            교내
          </ManuButton>
          <ManuButton
            color={currentTab === "OUT" ? "#FFBA35" : undefined}
            bottomColor={currentTab === "OUT" ? "#FFBA35" : undefined}
            onClick={() => {
              setCurrentTab("OUT");
              setPlaceholder("교외에서 내가 가고 싶은 식당은?");
            }}
          >
            교외
          </ManuButton>
        </MenuDiv>

        <RestaurantWrapper>
          {allRestaurantList.map((Restaurant, index) => {
            return <RstaurantList Restaurant={Restaurant} index={index} />;
          })}
        </RestaurantWrapper>
        <AdImg src={Ad1} alt="Ad1" />
      </div>
    </div>
  );
}

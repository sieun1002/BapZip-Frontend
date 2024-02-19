import React, { useState, useEffect } from "react";
import api from "../../api/LoginTokenApi";
import { useLocation } from "react-router-dom";

import Header from "../ListIn/Header";
import SearchBar from "../ListIn/Searchbar";
import RstaurantList from "./RstaurantList";
import scrUnknownIcon from "../../images/WriteReview/unknownIcon.png";

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
  const [placeholder, setPlaceholder] = useState("내가 가고싶은 식당은?");
  const [searchText, setSearchText] = useState("");

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
  }, [location.state]);

  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const classification = currentTab;

  const schoolId = localStorage.getItem("schoolId");
  const AllRestaurantListApi = async () => {
    try {
      const url = `https://babzip.seunga.shop/congestion/ranking?classification=${classification}&schoolId=${schoolId}`;

      const response = await api.get(url);
      setAllRestaurantList(
        response.data.result.filter((item) =>
          item.storeName.includes(searchText)
        )
      );
    } catch (error) {
      console.error("혼잡도 랭킹 api 가져오기 실패", error);
    }
  };
  useEffect(() => {
    AllRestaurantListApi();
  }, [currentTab]);
  useEffect(() => {
    AllRestaurantListApi();
  }, [searchText]);
  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Header title={title} honjapPreLink={"/List"} />
        <SearchBar
          placeholder={placeholder}
          searchText={searchText}
          setSearchText={setSearchText}
        />

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
          {allRestaurantList.length ? (
            allRestaurantList.map((Restaurant, index) => {
              return <RstaurantList Restaurant={Restaurant} index={index} />;
            })
          ) : (
            <div
              className="unknownStore-SearchModal"
              style={{ marginLeft: "60px" }}
            >
              <img
                src={scrUnknownIcon}
                alt="아이콘"
                style={{ width: "90px", height: "90px" }}
              />
              <div
                className="info-unknownStore"
                style={{ justifyContent: "center" }}
              >
                <p style={{ color: "#FFBA35" }}>`{searchText}` </p>
                <p style={{ color: "#767676" }}>에 대한 결과가 없습니다.</p>
              </div>
              <p className="txt-unknownStore">
                비슷한 다른 검색어를 입력해보세요.
              </p>
            </div>
          )}
        </RestaurantWrapper>
        <AdImg src={Ad1} alt="Ad1" />
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import api from "../../api/LoginTokenApi";
import RstaurantList from "../WaitingRank/RstaurantList";
import { RestaurantWrapper } from "../../styles/WaitingRank/WaringRank.styled";
import styled from "styled-components";

export default function MainWaitingRank() {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const classification = "ALL";

  const schoolId = localStorage.getItem("schoolId");

  useEffect(() => {
    const AllRestaurantListApi = async () => {
      try {
        const url = `https://babzip.seunga.shop/congestion/ranking?classification=${classification}&schoolId=${schoolId}`;

        const response = await api.get(url);
        setAllRestaurantList(response.data.result);
        console.log(response.data.result);

        console.log(allRestaurantList);
      } catch (error) {
        console.error("혼잡도 랭킹 api 가져오기 실패", error);
      }
    };

    AllRestaurantListApi();
  }, []);
  return (
    <RestaurantWrapper>
      {allRestaurantList.slice(0, 3).map((Restaurant, index) => {
        return (
          <RstaurantList Restaurant={Restaurant} index={index} key={index} restaurantPreLink={"/List"}/>
        );
      })}
    </RestaurantWrapper>
  );
}

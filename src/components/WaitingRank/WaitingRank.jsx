import React, { useState, useRef, useEffect } from "react";
import api from "../../api/LoginTokenApi";

import Header from "../ListIn/Header";
import SearchBar from "../ListIn/Searchbar";
import RstaurantList from "./RstaurantList";

export default function WaitingRank() {
  const [RestaurantList, setRestaurantList] = useState([]);

  const classification = "ALL";
  const schoolId = localStorage.getItem("schoolId");

  useEffect(() => {
    const RestaurantListApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/congestion/ranking?classification=${classification}&schoolId=${schoolId}`;

        const response = await api.get(url);
        setRestaurantList(response.data.result);
        // console.log(response.data.result);

        console.log(RestaurantList);
      } catch (error) {
        console.error("혼잡도 랭킹 api 가져오기 실패", error);
      }
    };

    RestaurantListApi();
  }, []);

  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Header />
        <SearchBar />

        {RestaurantList.map((Restaurant, index) => {
          return <RstaurantList Restaurant={Restaurant} />;
        })}
      </div>
    </div>
  );
}

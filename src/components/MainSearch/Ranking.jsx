import React, { useEffect, useState } from "react";
import api from "../../api/LoginTokenApi";
import { Link } from "react-router-dom";

export default function Ranking(props) {
  const storedUserId = localStorage.getItem("schoolId");
  const [storeData, setData] = useState([]);
  function getStore() {
    const urlget = `https://babzip.seunga.shop/congestion/ranking/top5?schoolId=${storedUserId}`;
    api
      .get(urlget)
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  if (storeData.length === 0) {
    getStore();
  }
  function colorFont(congestionAV) {
    if (congestionAV > 20) return "#E32525";
    else if (congestionAV > 10) return "#FFBA35";
    else return "#4AD917";
  }
  useEffect(() => {
    console.log(props.storeLen);
  }, [props.storeLen]);
  return (
    <div
      className="Ranking-MainSearch"
      style={props.storeLen ? { display: "block" } : { display: "none" }}
    >
      <p className="title-Ranking">실시간 급상승 맛집</p>
      {storeData.length ? (
        <div className="result-Ranking">
          {storeData.map((item) => {
            return (
              <Link
                to={`/RestaurantInfo/${item.storeId}`}
                key={item.storeId}
                state={{ navBar: "home", restaurantPreLink: "/Home" }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="storeName-Ranking">
                  <p>{item.ranking}</p>
                  <p style={{ fontWeight: 500, width: "130px" }}>
                    {item.storeName}
                  </p>
                  <p style={{ color: colorFont(item.congestionAV) }}>
                    {item.waitingTime}min{" "}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

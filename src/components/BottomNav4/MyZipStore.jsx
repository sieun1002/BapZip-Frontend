import React, { useState } from "react";
import api from "../../api/LoginTokenApi";
import { Link } from "react-router-dom";

export default function MyZipStore() {
  const [zipData, setData] = useState([]);
  const urlget = `https://babzip.seunga.shop/stores/myZip`;

  function getZip() {
    api
      .get(urlget)
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  if (!zipData[0]) {
    getZip();
  }
  return (
    <div className="MyZipStore-BottomNav4">
      <div className="text-MyZipStore">
        <p className="title-MyZipStore">내가 찜한 식당</p>
        <p className="viewAll-MyZipStore">전체보기</p>
      </div>
      <div className="Stores-MyZipStore">
        {zipData.length ? (
          <div className="result-SearchModal">
            {zipData.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/RestaurantInfo/${item.id}`}
                  state={{ navBar: "review", restaurantPreLink: "/MyPage" }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="store-Stores">
                    <img
                      src={item.imageUrl}
                      alt="사진"
                      className="image-MyZipStore"
                    />
                    <p className="name-MyZipSore">{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

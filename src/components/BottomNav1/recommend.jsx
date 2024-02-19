import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/LoginTokenApi";
import srcBackGround from "../../images/BottomNav2/reviewPicBack.png";
import scrBookmarkBtn from "../../images/StoreListIn/bookmarkBtn.png";
import scrEmBookmarkBtn from "../../images/StoreListIn/embookmarkBtn.png";

const Recommend = () => {
  const [needR, setRender] = useState(true);

  function clickBookmark(id, isBook) {
    if (isBook) {
      const urlDel = `https://babzip.seunga.shop/stores/deleteZip?storeId=${id}`;
      api.delete(urlDel).catch(function (error) {
        console.log(error.message);
      });
    } else {
      const urlPost = `https://babzip.seunga.shop/stores/zip?storeId=${id}`;
      api.post(urlPost).catch(function (error) {
        console.log(error.message);
      });
    }
    setRender(!needR);
  }

  const [clicked, setclick] = useState([true, false, false, false, false]);
  let index = 0;
  const categoryList = ["KOREA", "CHINA", "WESTERN", "JAPAN", "CAFE"];
  const [category, setCategory] = useState("KOREA");
  function clickBtn(x) {
    const bools = [false, false, false, false, false];
    index = x;
    bools[index] = true;
    setclick(bools);
    setCategory(categoryList[x]);
    getReview(category);
    console.log(storeData);
  }
  const storedUserId = localStorage.getItem("schoolId");
  const [storeData, setData] = useState({});
  function getReview(category = "KOREA") {
    const urlget = `https://babzip.seunga.shop/stores/recommend/${category}?schoolId=${storedUserId}`;
    api
      .get(urlget)
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  //처음 랜더링시 연결
  let reviewText = "";
  if (!storeData.storeName) {
    getReview(category);
  } else {
    if (storeData.content > 50) {
      reviewText = storeData.content.substr(0, 50) + "...";
    } else {
      reviewText = storeData.content;
    }
  }
  useEffect(() => {
    setTimeout(() => {
      getReview(category);
    }, 200);
  }, [needR, category]);

  return (
    <div className="recommend-container">
      <p className="title-timeline2">추천식당</p>
      <div className="menuBtnSection-timeline2">
        <button
          onClick={() => clickBtn(0)}
          className={clicked[0] ? "btnActive-timeline" : "btn-timeline"}
        >
          한식
        </button>
        <button
          onClick={() => clickBtn(1)}
          className={clicked[1] ? "btnActive-timeline" : "btn-timeline"}
        >
          중식
        </button>
        <button
          onClick={() => clickBtn(2)}
          className={clicked[2] ? "btnActive-timeline" : "btn-timeline"}
        >
          양식
        </button>
        <button
          onClick={() => clickBtn(3)}
          className={clicked[3] ? "btnActive-timeline" : "btn-timeline"}
        >
          일식
        </button>
        <button
          onClick={() => clickBtn(4)}
          className={clicked[4] ? "btnActive-timeline" : "btn-timeline"}
        >
          카페
        </button>
      </div>
      <div
        className="container-review"
        style={{
          position: "relative",
          backgroundImage: `url(${storeData.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${srcBackGround})`,
            backgroundSize: "cover",
            width: "420px",
            height: "180px",
          }}
        />
        <Link
          to={`/RestaurantInfo/${storeData.storeId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="contents-review" style={{ position: "absolute" }}>
            <p className="name-review">{storeData.storeName}</p>
            <div className="topReview-review">
              <p className="txt-review">"{reviewText}"</p>
              <p className="userDetail-review">{storeData.userName}</p>
            </div>
          </div>
        </Link>
        <div
          className="likes-review"
          style={{ position: "absolute", left: "375px", marginTop: "14px" }}
        >
          <img
            src={storeData.bookmark ? scrBookmarkBtn : scrEmBookmarkBtn}
            alt=""
            style={{ width: "31px", height: "31px" }}
            onClick={() => {
              clickBookmark(storeData.storeId, storeData.bookmark);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Recommend;

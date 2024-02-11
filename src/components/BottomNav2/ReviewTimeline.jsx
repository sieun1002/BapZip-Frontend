import React, { useState } from "react";
import Reviews from "./Reviews";
import api from "../../api/LoginTokenApi";

export default function ReviewTimeline() {
  const [clicked, setclick] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  let index = 0;
  let categoryList = ["ALL", "KOREA", "CHINA", "JAPAN", "WESTERN", "CAFE"];
  function clickBtn(x) {
    const bools = [false, false, false, false, false, false];
    index = x;
    bools[index] = true;
    setclick(bools);
    getReview(categoryList[x]);
  }

  // api연결
  const storedUserId = localStorage.getItem("schoolId"); 
  const [reviewData, setData] = useState({});
  function getReview(category = "ALL") {
    const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/timeline?schoolId=${storedUserId}&categoryName=${category}`;
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
  if (!reviewData[0]) {
    getReview();
  }

  return (
    <div className="container-timeline">
      <p className="title-timeline">리뷰 타임라인</p>
      <div className="menuBtnSection-timeline">
        <button
          onClick={() => clickBtn(0)}
          className={clicked[0] ? "btnActive-timeline" : "btn-timeline"}
        >
          전체
        </button>
        <button
          onClick={() => clickBtn(1)}
          className={clicked[1] ? "btnActive-timeline" : "btn-timeline"}
        >
          한식
        </button>
        <button
          onClick={() => clickBtn(2)}
          className={clicked[2] ? "btnActive-timeline" : "btn-timeline"}
        >
          중식
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
          양식
        </button>
        <button
          onClick={() => clickBtn(5)}
          className={clicked[5] ? "btnActive-timeline" : "btn-timeline"}
        >
          카페
        </button>
      </div>
      {reviewData[0] ? <Reviews reviews={reviewData} /> : ""}
    </div>
  );
}

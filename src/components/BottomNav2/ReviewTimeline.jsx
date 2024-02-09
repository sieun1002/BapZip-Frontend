import React, { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";
import { useSignUp } from "../../context/SignUpContext";
import api from "../../api/LoginTokenApi";

export default function ReviewTimeline() {
  //api 인증 test

  const [clicked, setclick] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  let index = 0;
  function clickBtn(x) {
    const bools = [false, false, false, false, false, false];
    index = x;
    bools[index] = true;
    setclick(bools);
  }

  // api연결
  // const { userInfo } = useSignUp();
  const schoolId = 7;
  const [reviewData, setData] = useState({});
  // function getReview() {
  //   const urlget = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/timeline?schoolId=${schoolId}&categoryName=ALL`;
  //   axios
  //     .get(urlget)
  //     .then(function (response) {
  //       setData(response.data.result);
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // }
  // if (!reviewData[0]) {
  //   getReview();
  // } else {
  //   console.log(reviewData);
  // }

  useEffect(() => {
    const getReview = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/timeline?schoolId=${schoolId}&categoryName=ALL`;

        const response = await api.get(url);
        setData(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    if (!reviewData[0]) {
      getReview();
    } else {
      console.log(reviewData);
    }
  }, []);

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

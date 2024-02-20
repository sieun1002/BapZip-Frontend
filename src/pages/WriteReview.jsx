import React, { useEffect, useState } from "react";
import api from "../api/LoginTokenApi";

import Header from "../components/WriteReview/Header";
import SearchStore from "../components/WriteReview/SearchStore";
import StarRating from "../components/WriteReview/StarRating";
import SelectBenefit from "../components/WriteReview/SelectGood";
import WriteTxt from "../components/WriteReview/WriteTxt";
import UploadImg from "../components/WriteReview/UploadImg";
import ModalGetPoint10 from "../components/WriteReview/ModalGetPoint10";
import { useLocation } from "react-router";

export default function WriteReview() {
  const location = useLocation();
  const [reviewDetail, setReview] = useState({
    storeName: "",
    rating: 0,
    hashtags: [],
    reviewText: "",
    imgScr: [],
  });
  const [completeWrite, setComplete] = useState(false);
  const [modalState, setModal] = useState(false);
  useEffect(() => {
    if (checkComplete()) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [reviewDetail]);

  function checkComplete() {
    if (
      reviewDetail.storeName &&
      reviewDetail.rating !== 0 &&
      reviewDetail.hashtags.length !== 0 &&
      reviewDetail.reviewText.length >= 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setStore(input) {
    setReview({
      ...reviewDetail,
      storeName: input,
    });
  }
  function setRate(input) {
    setReview({
      ...reviewDetail,
      rating: input,
    });
  }
  const hashtagAll = [
    "혼밥",
    "양많음",
    "빠름",
    "저렴함",
    "깨끗함",
    "단체석",
    "맛있음",
    "친절함",
    "넓음",
    "조용함",
  ];
  function setBenefit(input) {
    let hashtag = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i]) {
        hashtag.push(hashtagAll[i]);
      }
    }
    setReview({
      ...reviewDetail,
      hashtags: hashtag,
    });
  }
  function setTxt(input) {
    setReview({
      ...reviewDetail,
      reviewText: input,
    });
  }
  function setImgScr(input) {
    setReview({
      ...reviewDetail,
      imgScr: input,
    });
  }

  const url = "https://babzip.seunga.shop/reviews";

  function submitReview() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today
      .getMonth()
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    const formData = new FormData();
    formData.append("visitDate", formattedDate);
    formData.append("storeName", reviewDetail.storeName);
    formData.append("rating", reviewDetail.rating);
    formData.append("hashtags", reviewDetail.hashtags);
    formData.append("reviewText", reviewDetail.reviewText);
    for (let i = 0; i < reviewDetail.imgScr.length; i++) {
      formData.append(`images1`, reviewDetail.imgScr[i]);
    }
    api({
      method: "post",

      url: url,
      data: formData,
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  function clickBtn() {
    setModal(true);
    submitReview();
  }
  return (
    <div className="App">
      <div className="container-writeReview" style={{ position: "relative" }}>
        <Header
          preLink={location.state?.preLink}
          restaurantPreLink={location.state?.restaurantPreLink}
        />

        <SearchStore setStore={setStore} />
        <StarRating setRate={setRate} />
        <SelectBenefit setBenefit={setBenefit} />
        <WriteTxt setTxt={setTxt} />
        <UploadImg setImgScr={setImgScr} />
        <ModalGetPoint10 viewModal={modalState} />
        <div className="btn-writeReview">
          <button
            className="submitBtn-writeReview"
            style={
              completeWrite
                ? { backgroundColor: "#FFBA35" }
                : { backgroundColor: "#EDEDED" }
            }
            disabled={!completeWrite}
            onClick={() => {
              clickBtn();
            }}
            type="submit"
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

import { React, useEffect, useState } from "react";
import api from "../../api/LoginTokenApi";
import { Link } from "react-router-dom";
import {
  ReviewDiv,
  ReviewProfileDiv,
  ReviewProfileNotImg,
  ReviewProfileImg,
  ReviewProfileName,
  ReviewStarDiv,
  ReviewStarImg,
  ReviewStarNum,
  ReviewContentDiv,
  ReviewImg,
  ReviewDate,
  ReviewLine,
  ReviewContainer,
  ReviewWriteImg,
  HeartImg,
} from "../../styles/RestaurantInfo/InfoReview.styled";

import emptyHeartImg from "../../images/RestaurantInfo/emptyHeart.svg";
import heartImg from "../../images/RestaurantInfo/heart.svg";
import smallStarImg from "../../images/RestaurantInfo/smallStar.svg";
import smallEmptyStar from "../../images/RestaurantInfo/smallEmptyStar.svg";

export default function InfoReview(props) {
  const { Review, index } = props;
  const [heart, setHeart] = useState(Review.like);

  const starRendering = (rating) => {
    const star = [];
    for (let i = 0; i < rating; i++) {
      star.push(<ReviewStarImg key={i} src={smallStarImg} alt="smallStar" />);
    }

    for (let i = 0; i < 5 - rating; i++) {
      star.push(
        <ReviewStarImg key={i} src={smallEmptyStar} alt="smallEmptySta" />
      );
    }
    return star;
  };
  //리뷰 좋아요 api
  const addHeartApi = async (reviewId) => {
    try {
      // API 요청 URL
      const url = `https://babzip.seunga.shop/reviews/zip/${reviewId}`;

      // 요청 본문에 포함될 데이터
      // const data = {
      //   userId: localStorage.getItem("userId"),
      // };

      // axios.post 메소드를 사용하여 요청을 보냄
      await api.post(url);

      // 리뷰 좋아요 성공 처리
      setHeart(true);
      console.log("addHeart successful");
    } catch (error) {
      // 리뷰 좋아요 실패또는 에러 처리
      console.error(
        "addHeart error",
        error.response ? error.response.data : error
      );

      // 에러 상황에 대한 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
    }
  };

  //리뷰 삭제 api
  const deleteHeartApi = async (reviewId) => {
    try {
      // API 요청 URL
      const url = `https://babzip.seunga.shop/reviews/deleteZip/${reviewId}`;

      // 요청 본문에 포함될 데이터
      // const data = {
      //   userId: localStorage.getItem("userId"),
      // };

      // axios.post 메소드를 사용하여 요청을 보냄
      await api.delete(url);

      // 리뷰 좋아요 삭제 성공 처리
      setHeart(false);
      console.log("deleteHeart successful");
    } catch (error) {
      // 리뷰 좋아요 삭제 실패 또는 에러 처리
      console.error(
        "deleteHeart error",
        error.response ? error.response.data : error
      );
      // 에러 상황에 대한 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
    }
  };

  return (
    <ReviewDiv key={index}>
      <ReviewProfileDiv>
        <ReviewProfileImg src={Review.userImage} alt="userImage" />
        <ReviewProfileName>{Review.nickname}</ReviewProfileName>
        <HeartImg
          src={heart ? heartImg : emptyHeartImg}
          alt="heart"
          onClick={() => {
            if (heart) {
              deleteHeartApi(Review.reviewId);
            } else {
              addHeartApi(Review.reviewId);
            }
          }}
        />
      </ReviewProfileDiv>
      <ReviewStarDiv>
        {starRendering(Review.rating)}
        <ReviewStarNum>{Review.rating}.0</ReviewStarNum>
      </ReviewStarDiv>
      <ReviewContentDiv>{Review.reviewText}</ReviewContentDiv>
      {Review.reviewImages.length !== 0
        ? Review.reviewImages.map((ReviewImgUrl, index) => (
            <ReviewImg src={ReviewImgUrl} alt="reviewImage" key={index} />
          ))
        : null}
      <ReviewDate>
        {Review.createdAt ? Review.createdAt.split("T")[0] : ""}
      </ReviewDate>
    </ReviewDiv>
  );
}

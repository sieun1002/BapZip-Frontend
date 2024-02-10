import { React, useEffect, useState } from "react";
import api from "../../api/LoginTokenApi";
import { Link } from "react-router-dom";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/RestaurantInfo/RestaurantInfo.styled";
import { BreakLine } from "../../styles/RestaurantInfo/InfoHome.styled";
import {
  FullRateDiv,
  StarDiv,
  RateDiv,
  StarImg,
  StarP1,
  StarP2,
  MainTitleDiv,
  MainTitleP1,
  MainTitleP2,
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

import BarChart from "./BarChart";

import bigStar from "../../images/RestaurantInfo/bigStar.svg";
import smallStarImg from "../../images/RestaurantInfo/smallStar.svg";
import smallEmptyStar from "../../images/RestaurantInfo/smallEmptyStar.svg";
import reviewWrite from "../../images/RestaurantInfo/reviewWrite.svg";
import emptyHeartImg from "../../images/RestaurantInfo/emptyHeart.svg";
import heartImg from "../../images/RestaurantInfo/heart.svg";

export default function InfoReview() {
  const initialData = [
    { label: 5, value: 0 },
    { label: 4, value: 0 },
    { label: 3, value: 0 },
    { label: 2, value: 0 },
    { label: 1, value: 0 },
  ];

  const [storeReview, setStoreReview] = useState([]);
  const [data, setData] = useState(initialData);

  //URL에서 storeId 추출
  // const {storeId} = useParams();
  const storeId = 7;

  useEffect(() => {
    const storeReviewApi = async () => {
      try {
        const schoolId = localStorage.getItem("schoolId");
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/${storeId}?schoolId=${schoolId}`;

        const response = await api.get(url);
        setStoreReview(response.data.result);
        updateData(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("리뷰 가져오기 실패", error);
      }
    };

    storeReviewApi();
  }, [storeId]);

  const updateData = (reviews) => {
    const newData = [...data];
    reviews.forEach((review) => {
      const rating = review.rating;
      newData.forEach((item) => {
        if (item.label === rating) {
          item.value += 1;
        }
      });
    });
    setData(newData);
  };

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

  const averageStar = () => {
    var sum = 0;
    data.forEach((item) => {
      sum += item.label * item.value;
    });
    const average = sum / (storeReview.length * 2);
    return <StarP1>{average}</StarP1>;
  };

  const [heart, setHeart] = useState(false);

  //리뷰 좋아요 api
  const addHeartApi = async (reviewId) => {
    try {
      // API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/zip/${reviewId}`;

      // 요청 본문에 포함될 데이터
      const data = {
        userId: localStorage.getItem("userId"),
      };

      // axios.post 메소드를 사용하여 요청을 보냄
      const response = await api.post(url, data);

      // 리뷰 좋아요 성공 처리
      console.log("addHeart successful", response.data.result.message);

      setHeart(true);
    } catch (error) {
      // 리뷰 좋아요 실패또는 에러 처리
      console.error(
        "addHeart error",
        error.response ? error.response.data : error
      );
      setHeart(false);
      // 에러 상황에 대한 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
    }
  };

  //리뷰 삭제 api
  const deleteHeartApi = async (reviewId) => {
    try {
      // API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/reviews/deleteZip/${reviewId}`;

      // 요청 본문에 포함될 데이터
      const data = {
        userId: localStorage.getItem("userId"),
      };

      // axios.post 메소드를 사용하여 요청을 보냄
      const response = await api.delete(url, data);

      // 리뷰 좋아요 삭제 성공 처리
      console.log("deleteHeart successful", response.data.result.message);

      setHeart(false);
    } catch (error) {
      // 리뷰 좋아요 삭제 실패 또는 에러 처리
      console.error(
        "addHeart error",
        error.response ? error.response.data : error
      );
      setHeart(true);
      // 에러 상황에 대한 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <FullRateDiv>
            <StarDiv>
              <StarImg src={bigStar} alt="bigStar" />
              {averageStar()}
              <StarP2>({storeReview.length})</StarP2>
            </StarDiv>
            <RateDiv>
              <BarChart data={data} />
            </RateDiv>
          </FullRateDiv>
          <BreakLine></BreakLine>
          <MainTitleDiv>
            <MainTitleP1>리뷰</MainTitleP1>
            <MainTitleP2>{storeReview.length}개</MainTitleP2>
            <Link to="#">
              <ReviewWriteImg src={reviewWrite} alt="reviewWrite" />
            </Link>
          </MainTitleDiv>
          <ReviewContainer>
            {storeReview.map((Review, index) => (
              <ReviewDiv>
                <ReviewProfileDiv>
                  <ReviewProfileImg src={Review.userImage} alt="userImage" />
                  <ReviewProfileName>{Review.nickname}</ReviewProfileName>

                  {heart === true ? (
                    <HeartImg src={heartImg} alt="heart" />
                  ) : (
                    <HeartImg src={emptyHeartImg} alt="heart" />
                  )}
                </ReviewProfileDiv>
                <ReviewStarDiv>
                  {starRendering(Review.rating)}
                  <ReviewStarNum>{Review.rating}.0</ReviewStarNum>
                </ReviewStarDiv>
                <ReviewContentDiv>{Review.reviewText}</ReviewContentDiv>
                {Review.reviewImage !== "" ? (
                  <ReviewImg src={Review.reviewImage} alt="reviewImage" />
                ) : null}

                <ReviewDate>
                  {Review.createdAt ? Review.createdAt.split("T")[0] : ""}
                </ReviewDate>
              </ReviewDiv>
            ))}
          </ReviewContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

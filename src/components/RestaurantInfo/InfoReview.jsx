import { React, useEffect, useState } from "react";
import api from "../../api/LoginTokenApi";
import { useParams } from "react-router-dom";
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
  ReviewContainer,
  ReviewWriteImg,
  NoneReviewDiv,
} from "../../styles/RestaurantInfo/InfoReview.styled";

import BarChart from "./BarChart";
import InfoReviewBox from "./InfoReviewBox";

import bigStar from "../../images/RestaurantInfo/bigStar.svg";
import reviewWrite from "../../images/RestaurantInfo/reviewWrite.svg";

export default function InfoReview(props) {
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
  const { storeId } = useParams();

  useEffect(() => {
    const storeReviewApi = async () => {
      try {
        const schoolId = localStorage.getItem("schoolId");
        const url = `https://babzip.seunga.shop/reviews/${storeId}?schoolId=${schoolId}`;

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

  const averageStar = () => {
    var sum = 0;
    data.forEach((item) => {
      sum += item.label * item.value;
    });
    const average = (sum / storeReview.length).toFixed(1);
    return <StarP1>{average}</StarP1>;
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <FullRateDiv>
            <StarDiv>
              <StarImg src={bigStar} alt="bigStar" />
              {storeReview.length === 0 ? <StarP1>0</StarP1> : averageStar()}
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
            <Link
              to="/WriteReview"
              state={{
                preLink: `/RestaurantInfo/${storeId}`,
                restaurantPreLink: props.restaurantPreLink,
              }}
            >
              <ReviewWriteImg src={reviewWrite} alt="reviewWrite" />
            </Link>
          </MainTitleDiv>
          <ReviewContainer>
            {storeReview.length === 0 ? (
              <NoneReviewDiv>
                아직 리뷰가 없네요. <br /> 첫 리뷰의 주인공이 되어 <br />{" "}
                포인트를 얻어보세요!
              </NoneReviewDiv>
            ) : (
              storeReview.map((Review, index) => {
                return <InfoReviewBox Review={Review} index={index} />;
              })
            )}
          </ReviewContainer>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

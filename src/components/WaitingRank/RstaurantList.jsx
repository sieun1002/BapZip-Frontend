import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../api/LoginTokenApi";
import {
  Container,
  ImageStyleFood,
  Rankimg,
  ImageStyleHuman,
  AlarmImg,
  TextPeople,
  TextMinute,
  MenuTxt,
  WaitingPeople,
  EstimatedTime,
  RankP,
  ScrapImage,
} from "../../styles/WaitingRank/WaringRank.styled";

import Rank from "../../images/WaitingRank/Rank.svg";
import redPeople from "../../images/WaitingRank/redPeople.svg";
import yellowPeople from "../../images/WaitingRank/yellowPeople.svg";
import greedPeople from "../../images/WaitingRank/greenPeople.svg";
import redWatch from "../../images/WaitingRank/redWatch.svg";
import yellowWatch from "../../images/WaitingRank/yellowWatch.svg";
import greenWatch from "../../images/WaitingRank/greenWatch.svg";
import scrapImg from "../../images/RestaurantInfo/scrap1.svg";
import noneScrapImg from "../../images/RestaurantInfo/noneScrap.svg";

export default function RstaurantList(props) {
  const Restaurant = props.Restaurant;
  const index = props.index;
  const storeId = Restaurant.storeId;

  const restaurantPreLink = window.location.href;

  console.log(restaurantPreLink);

  const [scrap, setScrap] = useState();
  const [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    const basicRestaurantInfoApi = async () => {
      try {
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/info`;

        const response = await api.get(url);
        setRestaurantInfo(response.data.result);
        setScrap(response.data.result.bookmark);
        console.log(response.data.result);
      } catch (error) {
        console.error("storeId: ", storeId, "가게 정보 가져오기 실패", error);
      }
    };

    basicRestaurantInfoApi();
  }, [storeId]);

  //가게 zip 하기
  const addStoreScrapApi = async () => {
    try {
      // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/info`;
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/zip?storeId=${storeId}`;

      const response = await api.post(url);
      // 리뷰 좋아요 성공 처리
      console.log("addCtoreScrap successful", response.data.isSuccess);
      setScrap(true);
    } catch (error) {
      console.error("가게 scrap 실패", error);
    }
  };

  //가게 zip 해제 하기
  const deleteStoreScrapApi = async () => {
    try {
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/deleteZip?storeId=${storeId}`;

      const response = await api.delete(url);
      // 가게 스크랩 해제  성공 처리
      console.log("deleteCtoreScrap successful", response.data.isSuccess);
      setScrap(false);
    } catch (error) {
      console.error("가게 scrap 해제 실패", error);
    }
  };
  return (
    // <Link to={`/RestaurantInfo/${storeId}`}>
    <Container>
      {scrap === true ? (
        <ScrapImage
          src={scrapImg}
          alt="scrapImg"
          onClick={() => {
            deleteStoreScrapApi();
          }}
        />
      ) : (
        <ScrapImage
          src={noneScrapImg}
          alt="nonScrap"
          onClick={() => {
            addStoreScrapApi();
          }}
        />
      )}
      {/* <Link to={`/RestaurantInfo/${storeId}`} state={{ preLink: "/Review" }}> */}
      <Link
        to={`/RestaurantInfo/${storeId}`}
        state={{ preLink: "/Review", restaurantPreLink: { restaurantPreLink } }}
      >
        <div style={{ width: "91%", height: "100%" }}>
          <RankP>{index + 1}</RankP>
          <Rankimg src={Rank} alt="Ranking" />

          <ImageStyleFood src={Restaurant.storeImageURL} alt="Bunsik" />
          <ImageStyleHuman
            src={
              Restaurant.congestionAV > 20
                ? redPeople
                : Restaurant.congestionAV > 10
                ? yellowPeople
                : greedPeople
            }
            alt="Human"
          />

          <AlarmImg
            src={
              Restaurant.congestionAV > 20
                ? redWatch
                : Restaurant.congestionAV > 10
                ? yellowWatch
                : greenWatch
            }
            alt="Alarm"
          />
          {/* <TextPeople>{Restaurant.occupancyCount}명</TextPeople> */}
          <TextPeople
            color={
              Restaurant.congestionAV > 20
                ? "#E32525"
                : Restaurant.congestionAV > 10
                ? "#FFBA35"
                : "#4AD917"
            }
          >
            {Restaurant.occupancyCount === null
              ? "-"
              : Restaurant.occupancyCount + "명"}
          </TextPeople>

          {/* <TextMinute>{Restaurant.waitingTime}분</TextMinute> */}
          <TextMinute
            color={
              Restaurant.congestionAV > 20
                ? "#E32525"
                : Restaurant.congestionAV > 10
                ? "#FFBA35"
                : "#4AD917"
            }
          >
            {Restaurant.waitingTime === null
              ? "-"
              : Restaurant.waitingTime + "분"}
          </TextMinute>

          <MenuTxt>{Restaurant.storeName}</MenuTxt>
          <WaitingPeople>대기 인원</WaitingPeople>
          <EstimatedTime>예상 시간</EstimatedTime>
        </div>
      </Link>
    </Container>
  );
}

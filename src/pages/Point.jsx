import React, { useState, useEffect } from "react";
import api from "../api/LoginTokenApi";

import {
  BodyDiv,
  WrapperDiv,
  Div,
  HeaderDiv,
  MainPointImg,
  MainPointDiv,
  MainPointWrapper,
  MainPointP1,
  MainPointP2,
  MainPointPDiv,
  ArrowLeftImage,
  MenuDiv,
  ManuButton,
  MainWrapper,
} from "../styles/Point/Point.styled";

import mainPoint from "../images/Point/mainPoint.svg";
import arrowLeft from "../images/Login/arrowLeft.svg";

import PointSearch from "../components/Point/PointSearch";
import PointChange from "../components/Point/PointChange";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Point() {
  const [currentTab, setCurrentTab] = useState("pointSearch");

  const location = useLocation();

  const renderTabComponent = (allPoint) => {
    switch (currentTab) {
      case "pointChange":
        return <PointChange allPoint={allPoint} />;
      default:
        return <PointSearch />;
    }
  };

  const [allPoint, setallPoint] = useState();

  useEffect(() => {
    const allPointApi = async () => {
      try {
        const url = `https://babzip.seunga.shop/point/myTotalPoint`;

        const response = await api.get(url);
        setallPoint(response.data.result);
        // setallPoint(3010);
        console.log(response.data.result);
      } catch (error) {
        console.error("myTotalPoint api 오류", error);
      }
    };

    allPointApi();
  }, []);

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv>
            <Link to="/MyPage">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </Link>
            포인트
          </HeaderDiv>
          <MainWrapper>
            <MainPointWrapper>
              <MainPointDiv></MainPointDiv>
              <MainPointImg src={mainPoint} alt="mainPoint" />
              <MainPointPDiv>
                {/* <MainPointP1>밥좋아님의 보유 포인트는?</MainPointP1> */}

                {location.state?.userName ? (
                  <MainPointP1>
                    {location.state?.userName}님의 보유 포인트는?
                  </MainPointP1>
                ) : (
                  ""
                )}
                <MainPointP2>{allPoint}P</MainPointP2>
              </MainPointPDiv>
            </MainPointWrapper>
          </MainWrapper>

          <MenuDiv>
            <ManuButton
              color={currentTab === "pointSearch" ? "#FFBA35" : undefined}
              bottomColor={currentTab === "pointSearch" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("pointSearch")}
            >
              포인트 조회
            </ManuButton>
            <ManuButton
              color={currentTab === "pointChange" ? "#FFBA35" : undefined}
              bottomColor={currentTab === "pointChange" ? "#FFBA35" : undefined}
              onClick={() => setCurrentTab("pointChange")}
            >
              포인트 전환
            </ManuButton>
          </MenuDiv>
          {renderTabComponent(allPoint)}

          {/* <PointSearch /> */}
          {/* <PointChange /> */}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

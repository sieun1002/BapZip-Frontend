import React from "react";
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
} from "../../styles/WaitingRank/WaringRank.styled";

import Bunsik from "../../images/Silsiganin/bunsik.png";
import HumanRed from "../../images/Silsiganin/human.png";
import HumanGreen from "../../images/Silsiganin/HumanGreen.png";
import HumanYellow from "../../images/Silsiganin/HumanYellow.png";
import AlarmRed from "../../images/Silsiganin/alarm.png";
import AlarmYellow from "../../images/Silsiganin/AlarmYellow.png";
import AlarmGreen from "../../images/Silsiganin/AlarmGreen.png";

import Rank from "../../images/WaitingRank/Rank.svg";
import redPeople from "../../images/WaitingRank/redPeople.svg";
import yellowPeople from "../../images/WaitingRank/yellowPeople.svg";
import greedPeople from "../../images/WaitingRank/greenPeople.svg";
import redWatch from "../../images/WaitingRank/redWatch.svg";
import yellowWatch from "../../images/WaitingRank/yellowWatch.svg";
import greenWatch from "../../images/WaitingRank/greenWatch.svg";

export default function RstaurantList(props) {
  const Restaurant = props.Restaurant;
  return (
    <Container>
      <Rankimg src={Rank} alt="Ranking" />
      <ImageStyleFood src={Restaurant.storeImageURL} alt="Bunsik" />
      <ImageStyleHuman src={redPeople} alt="Human" />
      <AlarmImg src={redWatch} alt="Alarm" />
      <TextPeople>{Restaurant.occupancyCount}명</TextPeople>
      <TextMinute>{Restaurant.waitingTime}분</TextMinute>
      <MenuTxt>{Restaurant.storeName}</MenuTxt>
      <WaitingPeople>대기 인원</WaitingPeople>
      <EstimatedTime>예상 시간</EstimatedTime>
    </Container>
  );
}

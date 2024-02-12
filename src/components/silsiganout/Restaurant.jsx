import React from "react";
import styled from "styled-components";
import Bunsik from "../../images/Silsiganin/bunsik.png";
import HumanRed from "../../images/Silsiganin/human.png";
import HumanGreen from "../../images/Silsiganin/HumanGreen.png";
import HumanYellow from "../../images/Silsiganin/HumanYellow.png";
import AlarmRed from "../../images/Silsiganin/alarm.png";
import AlarmYellow from "../../images/Silsiganin/AlarmYellow.png";
import AlarmGreen from "../../images/Silsiganin/AlarmGreen.png";
import Rank1 from "../../images/Silsiganin/Rank1.png";

const Container = styled.div`
  position: relative;
  width: 420px;
  height: 129px;
  left: 28px;
  top: 70px;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 0px 5px #dbdbdb;
  border-radius: 10px;
`;

const ImageStyleFood = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 128px;
  height: 129px;
  border-radius: 10px;
`;

const Rankimg = styled.img`
  position: absolute;
  left: 2.86%;
  right: 89.29%;
  top: 0%;
  bottom: 68.99%;
  z-index: 2;
`;

const ImageStyleHuman = styled.img`
  position: absolute;
  left: 38%;
  top: 34%;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  content: url(${(props) => getImageSource(props.numberOfPeople, "human")});
`;

const AlarmImg = styled.img`
  position: absolute;
  left: 72%;
  top: 34%;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  content: url(${(props) => getImageSource(props.numberOfPeople, "alarm")});
`;

const TextPeople = styled.p`
  width: 80px;
  height: 40px;
  position: absolute;
  left: 45%;
  top: 21%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => getColor(props.numberOfPeople)};
`;

const TextMinute = styled.p`
  width: 80px;
  height: 40px;
  position: absolute;
  left: 79%;
  top: 21%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => getColor(props.numberOfPeople)};
`;

const MenuTxt = styled.p`
  position: absolute;
  left: 34.76%;
  right: 40.71%;
  top: 1px;
  bottom: 71.32%;
  white-space: nowrap;
  margin-top: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #191919;
`;

const WaitingPeople = styled.p`
  position: absolute;
  left: 40%;
  right: 41.67%;
  top: 65%;
  bottom: 9.3%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  color: #767676;
`;

const EstimatedTime = styled.p`
  position: absolute;
  left: 78%;
  right: 41.67%;
  top: 65%;
  bottom: 9.3%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  color: #767676;
`;

const getColor = (numberOfPeople) => {
  if (numberOfPeople <= 5) {
    return "#4AD917";
  } else if (numberOfPeople >= 6 && numberOfPeople <= 20) {
    return "#FFBA35";
  } else {
    return "#E32525";
  }
};

const getImageSource = (numberOfPeople, type) => {
  if (numberOfPeople <= 5) {
    return type === "human" ? HumanGreen : AlarmGreen;
  } else if (numberOfPeople >= 6 && numberOfPeople <= 20) {
    return type === "human" ? HumanYellow : AlarmYellow;
  } else {
    return type === "human" ? HumanRed : AlarmRed;
  }
};

const Restaurant = () => {
  const numberOfPeople = 30;
  const estimatedTime = numberOfPeople * 5; // Calculate estimated time based on 5 minutes per person

  return (
    <Container>
      <Rankimg src={Rank1} alt="Ranking" />
      <ImageStyleFood src={Bunsik} alt="Bunsik" />
      <ImageStyleHuman numberOfPeople={numberOfPeople} alt="Human" />
      <AlarmImg numberOfPeople={numberOfPeople} alt="Alarm" />
      <TextPeople numberOfPeople={numberOfPeople}>
        {numberOfPeople}명
      </TextPeople>
      <TextMinute numberOfPeople={numberOfPeople}>{estimatedTime}분</TextMinute>
      <MenuTxt>학식당 - 분식</MenuTxt>
      <WaitingPeople>대기 인원</WaitingPeople>
      <EstimatedTime>예상 시간</EstimatedTime>
    </Container>
  );
};

export default Restaurant;

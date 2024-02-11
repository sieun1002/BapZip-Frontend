import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../images/BottomNav1/background.svg";
import human from "../../images/BottomNav1/human.svg";
import zandi from "../../images/BottomNav1/zandi.svg";
import school from "../../images/BottomNav1/school.svg";
import IN from "../../images/BottomNav1/IN.svg";
import IN2 from "../../images/BottomNav1/IN2.svg";
import IN3 from "../../images/BottomNav1/IN3.svg";
import Outbackground from "../../images/BottomNav1/Outbackground.svg";
import Out from "../../images/BottomNav1/Out.svg";
import Out2 from "../../images/BottomNav1/Out2.svg";

const Container = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%; /* 전체 화면 너비에 대한 설정 */
  max-width: 420px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬을 위한 설정 */
  height: 52px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const Container1 = styled.div`
  position: absolute;
  text-align: center;
  padding: 20px;
  margin-left: -20px;
  margin-top: 290px;
`;

const Container2 = styled.div`
  position: absolute;
  text-align: center;
  padding: 20px;
  margin-top: 70px;
`;

const BackgroundImage = styled.img`
  position: relative;
  width: 200px; /* 조정된 너비 */
  height: 199px; /* 조정된 높이 */
  z-index: 1;
`;

const ZandiImage = styled.img`
  position: absolute;
  margin-top: 145px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const SchoolImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  margin-left: 35px;
  margin-top: 48px;
`;

const HumanImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: 30px;
  margin-top: 120px;
`;

const In = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: 60px;
  margin-top: 35px;
`;

const In2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: 35px;
  margin-top: 35px;
`;

const In3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: 150px;
  margin-top: 190px;
`;

const OutBackgroundImage = styled.img`
  position: absolute;

  top: 0;
  right: 0;
  z-index: 1;
  margin-right: -380px;
  margin-top: 28px;
`;

const Out3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: -365px;
  margin-top: 35px;
`;

const Out4 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-right: -250px;
  margin-top: 200px;
`;

const StyledText = styled.div`
  position: absolute;
  width: 224px;
  height: 27px;
  right: 200px;
  top: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #191919;
`;

const StyledText2 = styled.div`
  position: absolute;
  width: 224px;
  height: 27px;
  right: 220px;
  top: 300px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #191919;
`;

const StyledText3 = styled.div`
  position: absolute;
  width: 79px;
  height: 16px;
  right: 3px;
  top: 305px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;

  color: #767676;
`;

const AroundSchool = () => {
  return (
    <Container>
      <StyledText>우리학교 식당 둘러보기</StyledText>
      <Container1>
        <Link to="/ListIn">
          <BackgroundImage src={background} alt="배경" />
          <ZandiImage src={zandi} alt="Zandi" />
          <SchoolImage src={school} alt="School" />
          <HumanImage src={human} alt="Human" />
          <In src={IN} alt="IN" />
          <In2 src={IN2} alt="IN2" />
          <In3 src={IN3} alt="IN3" />
        </Link>
      </Container1>
      <Container2>
        <Link to="/ListOut">
          <OutBackgroundImage src={Outbackground} alt="배경" />
          <Out3 src={Out} alt=">" />
          <Out4 src={Out2} alt="교외식당" />
        </Link>
      </Container2>
      <StyledText2>실시간 웨이팅 랭킹</StyledText2>
      <Link to="/SilsiganRanking">
        <StyledText3>더보기</StyledText3>
      </Link>
    </Container>
  );
};

export default AroundSchool;

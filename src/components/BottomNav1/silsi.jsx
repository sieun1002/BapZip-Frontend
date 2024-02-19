import React, { useState, useRef, useEffect } from "react";
import { useSignUp } from "../../context/SignUpContext";
import styled from "styled-components";
import api from "../../api/LoginTokenApi";
import Mark123 from "../../images/BottomNav1/Mark123.svg";

const Container = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  height: 52px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  top: 10px;

  background-color: #7c7c30;
  background: #ffffff;
  border: 1px solid #ffba35;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ffdf77;
`;

const Box = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 45%;
  height: 100%;
  border: 0px;
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */

  /* background-color: beige; */
`;

const Line = styled.div`
  position: absolute;
  width: 36px;
  height: 0px;
  left: 46%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  border: 1px solid #ffba35;
`;

//실시간 혼잡도 top5 div
const AdditionalInfo = styled.div`
  position: absolute;
  width: 220px;
  height: 36px;
  left: -25px;
  top: -80px;
`;
//학교선택 div
const SchoolInfo = styled.div`
  position: absolute;
  width: 40px;
  height: 36px;
  left: 10px;
  top: 13px;

  /* background-color: aqua; */
`;

const LogoImg = styled.img`
  width: 28px;
  height: 28px;
`;

const SchoolInfo2 = styled.div`
  position: absolute;
  width: 30px;
  height: 36px;
  left: 155px;
  top: 13px;

  /* background-color: #6200ff36; */
`;

const SchoolInfotxt = styled.div`
  position: absolute;
  width: auto;
  height: 22px;
  left: 52px;
  top: 15px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  justify-content: flex-start;
`;

const RankInfo = styled.div`
  position: absolute;
  width: 108px;
  height: 22px;
  left: 188px;
  top: 94px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
  white-space: nowrap;
`;

const NameInfo = styled.div`
  position: absolute;
  width: auto;
  height: 22px;
  left: 260px;
  top: 94px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
  white-space: nowrap;

  /* background-color: aqua; */
`;

const TimeInfo = styled.div`
  position: absolute;
  width: 58px;
  height: 22px;
  left: 376px;
  top: 94px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: ${(props) => props.color};
`;

const Silsi = ({ setValidSearchSchool }) => {
  const { schoolName, setSchoolName } = useSignUp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");
  const schoolId = localStorage.getItem("schoolId");
  const [rankTop5, setRankTop5] = useState([]);
  const [schoolLogo, setSchoolLogo] = useState({});

  useEffect(() => {
    const rankTop5Api = async () => {
      try {
        const url = `https://babzip.seunga.shop/congestion/ranking/top5?schoolId=${schoolId}`;

        const response = await api.get(url);
        setRankTop5(response.data.result);

        console.log("혼잡도 5 가져오기", response.data.result);
      } catch (error) {
        console.error("혼잡도 5 가져오기 실패", error);
      }
    };

    const schoolLogoApi = async () => {
      try {
        const url = `https://babzip.seunga.shop/school/logo?schoolId=${schoolId}`;

        const response = await api.get(url);
        setSchoolLogo(response.data.result);

        console.log("학교 로고 가져오기", response.data.result);
      } catch (error) {
        console.error("학교 로고 가져오기 실패", error);
      }
    };
    rankTop5Api();
    schoolLogoApi();
  }, [schoolId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % rankTop5.length);
        setFadeClass("");
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, rankTop5]);

  return (
    <Container>
      <Box
        onClick={() => {
          setValidSearchSchool(true);
        }}
      >
        <SchoolInfo>
          <LogoImg src={schoolLogo.logo} alt="학교마크" />
        </SchoolInfo>
        <SchoolInfo2>
          <img src={Mark123} alt="화살표마크" />
        </SchoolInfo2>
        <SchoolInfotxt>
          <p style={{ margin: "0" }}>{schoolName}</p>
        </SchoolInfotxt>
      </Box>

      <AdditionalInfo>
        <div className={fadeClass}>
          {rankTop5.length > 0 && (
            <>
              <RankInfo>{rankTop5[currentIndex]?.ranking}</RankInfo>
              <NameInfo>{rankTop5[currentIndex]?.storeName}</NameInfo>
              {rankTop5[currentIndex]?.congestionAV != null ? (
                <TimeInfo
                  color={
                    rankTop5[currentIndex]?.congestionAV
                      ? "#E32525"
                      : rankTop5[currentIndex]?.congestionAV > 10
                      ? "#FFBA35"
                      : "#4AD917"
                  }
                >
                  {rankTop5[currentIndex]?.congestionAV} min
                </TimeInfo>
              ) : (
                <TimeInfo color="#4AD917">0 min</TimeInfo>
              )}
            </>
          )}
        </div>
      </AdditionalInfo>

      <Line />
    </Container>
  );
};

export default Silsi;

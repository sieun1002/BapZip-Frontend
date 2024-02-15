import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import SearchIcon from "../../images/BottomNav1/SearchIcon.png";
import api from "../../api/LoginTokenApi";

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
`;

const Box = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #ffba35;
  box-shadow: 0px 0px 5px #ffdf77;
  border-radius: 10px;
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
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

const ModalContent = styled.div`
  position: fixed;
  width: 480px;
  height: 465px;
  top: 320px;
  margin-left: -30px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.div`
  position: absolute;
  width: 380px;
  height: 42px;
  left: 30px;
  top: 50px;
  background: #f6f6f6;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
`;

const AdditionalBox = styled.div`
  position: absolute;
  width: 480px;
  height: 45px;
  left: 0px;
  top: 110px;
  background: #f6f6f6;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  width: 220px;
  height: 36px;
  left: -25px;
  top: -80px;
`;

const NameInfo = styled.div`
  position: absolute;
  width: 108px;
  height: 22px;
  left: 235px;
  top: 94px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
  white-space: nowrap;
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
  color: #e32525;
`;

const schoolTextStyle = {
  position: "absolute",
  width: "85px",
  height: "27px",
  left: "30px",
  top: "10px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "27px",
  color: "#191919",
  whiteSpace: "nowrap",
};
const schoolTextStyle2 = {
  position: "absolute",
  width: "73px",
  height: "22px",
  left: "268px",
  top: "10px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "22px",
  color: "#191919",
  whiteSpace: "nowrap",
  textalign: "center",
};
const schoolTextStyle3 = {
  position: "absolute",
  width: "73px",
  height: "22px",
  left: "28px",
  top: "10px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "22px",
  color: "#191919",
  whiteSpace: "nowrap",
  textalign: "center",
};

const LineStyle = {
  position: "absolute",
  width: "512px",
  height: "0px",
  right: "90px",
  top: "400px",
  border: "1px solid #D9D9D9",
  transform: "rotate(-90deg)",
};

const ScrollContainer = styled.div`
  position: absolute;
  overflow-y: scroll;
  width: 150px;
  height: 290px;
  left: 330px;
  z-index: 2;
  bottom: 10px;
`;

const ScrollContainer2 = styled.div`
  position: absolute;
  overflow-y: scroll;
  width: 100px;
  height: 300px;
  right: 350px;
  z-index: 2;
  bottom: 10px;
`;

const ScrollText = styled.div`
  left: 300px;
`;

const Silsi = () => {
  const [Region, setRegion] = useState({});
  const [School, setSchool] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(null);

  const [additionalInfoText, setAdditionalInfoText] = useState([
    { name: "1 학식당 - 분식", time: "40min" },
    { name: "2 김밥천국", time: "35min" },
    { name: "3 학식당 - 한식", time: "25min" },
    { name: "4 블랑카페", time: "15min" },
    { name: "5 서브웨이", time: "10min" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % additionalInfoText.length);
        setFadeClass("");
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, additionalInfoText]);

  const convertTimeToMinutes = (time) => {
    return parseInt(time.replace("min", ""), 10);
  };

  const getColorByTime = (time) => {
    //인원수만큼 min의 색깔을 변경
    const minutes = convertTimeToMinutes(time);
    if (minutes < 20) {
      return "#4AD917";
    } else if (minutes < 40) {
      return "#FFBA35";
    } else {
      return "#E32525";
    }
  };
  //URL에서 storeId 추출
  // const {storeId} = useParams();
  const { storeId } = 5;

  useEffect(() => {
    const Regionapi = async () => {
      try {
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/detailinfo`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/region`;

        const response = await api.get(url);
        setRegion(response.data.result);
        console.log("마이페이지 api 호출", Region);
      } catch (error) {
        console.error("가게 세부 정보 가져오기 실패", error);
      }
    };

    Regionapi();
  }, []);

  useEffect(() => {
    const Schoolapi = async () => {
      try {
        // const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/stores/${storeId}/detailinfo`;
        const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school`;

        const response = await api.get(url);
        setSchool(response.data.result);
        console.log("마이페이지 api 호출", School);
      } catch (error) {
        console.error("가게 세부 정보 가져오기 실패", error);
      }
    };

    Schoolapi();
  }, [selectedRegion]);

  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBoxClick = (event) => {
    if (event.nativeEvent.offsetX <= event.currentTarget.clientWidth / 2) {
      setModalOpen(true);
    }
  };

  const handleRegionSelect = async (selectedRegion) => {
    try {
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school?regionId=${selectedRegion.id}`;
      const response = await api.get(url);
      setSchool(response.data.result);
      console.log("지역 선택 - 학교 목록 호출", School);
      setSelectedRegion(selectedRegion);
      setModalOpen(false); // 선택 후 모달을 닫을 수 있도록
    } catch (error) {
      console.error("지역 선택 - 학교 목록 호출 실패", error);
    }
  };

  return (
    <Container>
      <Box onClick={handleBoxClick} />
      {isModalOpen && (
        <ModalContent ref={modalRef}>
          <ScrollContainer>
            <ScrollText>{School && <p>{School.name}</p>}</ScrollText>
          </ScrollContainer>
          <ScrollContainer2>
            <ScrollText>
              {Region.map((item, index) => (
                <p key={index} onClick={() => handleRegionSelect(item)}>
                  {item.name}
                </p>
              ))}
            </ScrollText>
          </ScrollContainer2>
          <div style={LineStyle}></div>
          <div style={schoolTextStyle}>학교 선택</div>
          <SearchBar>
            <img src={SearchIcon} alt="Search Icon" />
            <SearchInput
              type="text"
              placeholder="학교를 입력하세요. 예) 경희대학교"
            />
          </SearchBar>
          <AdditionalBox>
            <div style={schoolTextStyle2}>학교명</div>
            <div style={schoolTextStyle3}>시·도</div>
          </AdditionalBox>
        </ModalContent>
      )}

      <AdditionalInfo>
        <div className={fadeClass}>
          <NameInfo>{additionalInfoText[currentIndex].name}</NameInfo>
          <TimeInfo
            style={{
              color: getColorByTime(additionalInfoText[currentIndex].time),
            }}
          >
            {additionalInfoText[currentIndex].time}
          </TimeInfo>
        </div>
      </AdditionalInfo>

      <Line />
    </Container>
  );
};

export default Silsi;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../../images/BottomNav1/SearchIcon.png";

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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  border: 1px solid #ffba35;
`;

const ModalContent = styled.div`
  position: absolute;
  width: 480px;
  height: 465px;
  left: 388px;
  top: 379px;
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

const Silsi = () => {
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

  return (
    <Container>
      <Box onClick={handleBoxClick} />
      {isModalOpen && (
        <ModalContent ref={modalRef}>
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
      <Line />
    </Container>
  );
};

export default Silsi;

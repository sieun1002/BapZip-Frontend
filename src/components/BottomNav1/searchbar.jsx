import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoicon from "../../images/BottomNav1/logo.svg";
import SearchIcon from "../../images/BottomNav1/icon_search.svg";
import Bellicon from "../../images/BottomNav1/Component 35.svg";
import Haticon from "../../images/BottomNav1/Component 36.svg";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9vh;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 35px;
  background-color: #f6f6f6;
  border-radius: 25px;
  cursor: text;
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 20px;
`;

const SearchInput = styled.input`
  width: calc(100% - 16px);
  height: 100%;
  border: none;
  outline: none;
  font-family: "Noto Sans";
  font-size: 16px;
  background: transparent;
  margin-left: 40px;
  box-sizing: border-box;
`;

const Placeholder = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ccc;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  cursor: pointer;
`;

const Icon1 = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 14px;
`;

const AdditionalIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  position: fixed;
  width: 152px;
  height: 212px;
  top: ${(props) => props.top - -10}px; /* 수정된 부분 */
  left: ${(props) => props.left - 115}px; /* 수정된 부분 */
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ModalImage = styled.img`
  position: relative;
  width: 80px;
  height: 80px;
  top: 20px;
  background: #d9d9d9;
  border-radius: 50%;
`;

const ModalId = styled.text`
  position: absolute;
  width: 108px;
  height: 22px;
  top: 110px;
  left: 23px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #191919;
`;
const ModalSchool = styled.text`
  position: absolute;
  width: 108px;
  height: 22px;
  top: 150px;
  left: 23px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #191919;
`;
const ModalPoint = styled.text`
  position: absolute;
  width: 108px;
  height: 22px;
  top: 173px;
  left: 23px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffba35;
`;

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setModalVisibility] = useState(false);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
  }); /* 수정된 부분 */
  const modalRef = useRef();

  const handleIconClick = (e) => {
    const iconPosition = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: iconPosition.bottom + window.scrollY,
      left: iconPosition.left + window.scrollX,
    });
    setModalVisibility(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAdditionalIconClick = () => {
    navigate("/components/BottomNav1/arlim"); // Use the correct path
  };

  return (
    <AppContainer>
      <OuterContainer>
        <Logo src={logoicon} alt="Logo" />
        <Circle>
          <Placeholder>
            <Icon1 src={SearchIcon} alt="Search Icon" />
          </Placeholder>
          <SearchInput
            type="text"
            placeholder="오늘 내가 가고 싶은 식당은?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Circle>
        <AdditionalIcons>
          <Icon
            src={Haticon}
            alt="Additional Icon 1"
            onClick={handleIconClick}
          />
          <div className="imgarlim">
            <Link to="/arlim">
              <Icon src={Bellicon} alt="Additional Icon 2" />
            </Link>
          </div>
        </AdditionalIcons>
      </OuterContainer>
      <Modal
        ref={modalRef}
        visible={isModalVisible}
        top={modalPosition.top} /* 수정된 부분 */
        left={modalPosition.left} /* 수정된 부분 */
      >
        {/* 내용 추가 */}
        <ModalImage />
        <ModalId>밥좋아</ModalId>
        <ModalSchool>밥ZIP대학교</ModalSchool>
        <ModalPoint>8000P</ModalPoint>
      </Modal>
    </AppContainer>
  );
};

export default Searchbar;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoicon from "../../images/BottomNav1/logo.svg";
import scrSearchIcon from "../../images/WriteReview/searchIcon.png";
import Bellicon from "../../images/BottomNav1/Component 35.svg";
import Haticon from "../../images/BottomNav1/Component 36.svg";
import api from "../../api/LoginTokenApi";

const AppContainer = styled.div`
  display: flex;
  position: relative;
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
  margin-top: 13px;
`;

const Logo = styled.img`
  height: 33px;
  width: 33px;
  margin-right: 9px;
  margin-left: 14px;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  cursor: pointer;
`;

const AdditionalIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  position: absolute;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 61px;
  right: 50px;
  width: 152px;
  height: 212px;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ModalImage = styled.img`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const ModalId = styled.text`
  width: 108px;
  height: 22px;
  margin-bottom: 15px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #191919;
`;
const ModalSchool = styled.text`
  width: 108px;
  height: 22px;
  margin-bottom: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #191919;
`;
const ModalPoint = styled.text`
  width: 108px;
  height: 22px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffba35;
`;

const Searchbar = () => {
  const [MypageModal, setMypageModal] = useState({});

  useEffect(() => {
    const MypageModalapi = async () => {
      try {
        const url = `https://babzip.seunga.shop/myPage/info`;

        const response = await api.get(url);
        setMypageModal(response.data.result);
      } catch (error) {
        console.error("가게 세부 정보 가져오기 실패", error);
      }
    };

    MypageModalapi();
  }, []);

  const navigate = useNavigate();
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

        <div
          className="search-SearchModal"
          style={{
            width: "320px",
            height: "35px",
            marginTop: "2px",
            marginRight: "18px",
            padding: 0
          }}
        >
          <Link
            to="/Home/MainSearch"
            style={{ textDecoration: "none", color: "black" }}
          >
          <img
              src={scrSearchIcon}
              alt="찾기 아이콘"
              style={{ width: "20px", height: "20px", marginTop:"14px"}}
            />
          </Link>
          <Link
            to="/Home/MainSearch"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p
              style={{
                height: "18px",
                width: "270px",
                fontSize: "12px",
                fontWeight: 500,
                color: "#707070",
                textAlign: "left",
              }}
            >
              오늘 내가 가고싶은 식당은?
            </p>
          </Link>
        </div>

        <AdditionalIcons>
          <Icon
            src={Haticon}
            alt="Additional Icon 1"
            onClick={handleIconClick}
          />
          <div className="imgarlim">
            <Link to="/arlim">
              <Icon
                src={Bellicon}
                alt="Additional Icon 2"
                style={{ marginTop: "5px" }}
              />
            </Link>
          </div>
        </AdditionalIcons>
      </OuterContainer>
      <Modal ref={modalRef} visible={isModalVisible}>
        {/* 내용 추가 */}
        <ModalImage src={MypageModal.imageUrl} />
        <ModalId>{MypageModal.nickname}</ModalId>
        <ModalSchool>{MypageModal.schoolName}</ModalSchool>
        <ModalPoint>{MypageModal.totalPoint}P</ModalPoint>
      </Modal>
    </AppContainer>
  );
};

export default Searchbar;

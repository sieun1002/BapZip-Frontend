import React, { useState, useRef, useEffect } from "react";
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
  left: 278px;
  top: 61px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setModalVisibility] = useState(false);
  const modalRef = useRef();

  const handleIconClick = () => {
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
          <Icon src={Bellicon} alt="Additional Icon 2" />
        </AdditionalIcons>
      </OuterContainer>
      <Modal ref={modalRef} visible={isModalVisible}>
        {/* 내용 추가 */}
        모달 내용이 여기에 들어갑니다.
      </Modal>
    </AppContainer>
  );
};

export default Searchbar;

import React, { useState } from "react";
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
  justify-content: flex-start; /* 로고를 왼쪽에 정렬합니다 */
  margin-bottom: 20px;
`;

const Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 내부 요소 사이의 공간을 최대화합니다 */
  width: 350px;
  height: 50px;
  background-color: #ddd;
  border-radius: 25px;
  cursor: text;
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 20px; /* 로고와의 간격 조정 */
`;

const SearchInput = styled.input`
  width: calc(100% - 16px);
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  margin-left: 40px; /* 원하는 만큼 조정하세요 */
  box-sizing: border-box; /* 추가 */
`;

const Placeholder = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ccc;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
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

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

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
          <Icon src={Haticon} alt="Additional Icon 1" />
          <Icon src={Bellicon} alt="Additional Icon 2" />
        </AdditionalIcons>
      </OuterContainer>
    </AppContainer>
  );
};

export default Searchbar;

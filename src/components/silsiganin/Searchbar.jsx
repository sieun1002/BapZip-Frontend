import React, { useState } from "react";
import styled from "styled-components";
import Searchimage from "../../images/Silsiganin/Searchimage.png";

const SearchContainer = styled.div`
  position: relative;
  width: 420px;
  height: 54px;
  left: 30px;
  top: 20px;
`;

const SearchBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #ffffff;
  border: 1.5px solid #ffba35;
  border-radius: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #707070;

  &:focus {
    outline: none; /* 기본 포커스 효과 제거 */
    border-color: #ffba35; /* 포커스 시 테두리 색상을 노란색(#ffba35)으로 유지 */
    box-shadow: 0 0 5px #ffba35; /* 포커스 시 약간의 그림자 효과 추가 (선택사항) */
  }
`;

const PlaceholderText = styled.label`
  position: absolute;
  width: 241px;
  height: 22px;
  left: 40px;
  top: 14px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #707070;
  pointer-events: none; /* Prevents interaction with the label */
`;

const SearchImage = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 385px;
  top: 17px;
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showText, setShowText] = useState(true);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setShowText(event.target.value === "");
  };

  return (
    <SearchContainer>
      <SearchImage src={Searchimage} alt="Search" />
      <SearchBox
        type="text"
        placeholder=""
        value={searchText}
        onChange={handleSearchChange}
      />

      {showText && (
        <PlaceholderText>교내에서 내가 가고싶은 식당은?</PlaceholderText>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

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
  padding-left: 45px;
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
  top: 15px;
`;

const SearchBar = (props) => {
  const placeholder = props.placeholder;

  const handleSearchChange = (event) => {
    props.setSearchText(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchImage src={Searchimage} alt="Search" />
      <SearchBox
        type="text"
        placeholder={placeholder}
        value={props.searchText}
        onChange={handleSearchChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;

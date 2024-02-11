import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchNav = styled.div`
  width: 420px;
  height: 50px;
  background-color: #00ffff36;

  ${flexCenter()}
  justify-content: space-between;
`;

export const SearchDetailSetting = styled.div`
  width: 250px;
  height: 50px;

  background-color: bisque;

  font-size: 16px;
  font-weight: 500;
  color: #191919;

  display: flex;
  align-items: center;
`;

export const ArrowBottomImg = styled.img`
  width: 10px;
  height: 5px;

  position: absolute;
  right: 35px;
`;

export const SearchSelect = styled.div`
  width: 81px;
  height: 29px;

  font-size: 16px;
  font-weight: 600;
  color: #191919;

  background-color: #892be250;
  display: flex;
  align-items: center;

  position: relative;
`;

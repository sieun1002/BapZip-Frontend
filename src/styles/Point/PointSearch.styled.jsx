import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchNav = styled.div`
  width: 420px;
  height: 60px;
  /* background-color: #00ffff36; */

  ${flexCenter()}
  justify-content: space-between;
`;

export const SearchDetailSetting = styled.div`
  width: 250px;
  height: 50px;

  /* background-color: bisque; */

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
  right: 10px;
`;

export const SearchSelect = styled.div`
  width: 60px;
  height: 29px;

  font-size: 16px;
  font-weight: 600;
  color: #191919;

  /* background-color: #892be250; */
  display: flex;
  align-items: center;

  position: relative;
`;

export const PointSearchDiv = styled.div`
  width: 420px;
  height: 103px;

  ${flexCenter()}
  justify-content: space-between;

  /* background-color: beige; */
`;

export const PointSearchLine = styled.div`
  width: 480px;

  border-bottom: solid 1px #dbdbdb;
`;

export const PointSearchPDiv = styled.div`
  width: 330px;
  height: 103px;

  /* background-color: #ecb25c; */

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PointSearchP1 = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #191919;

  margin: 0;
  margin-bottom: 5px;
`;
export const PointSearchP2 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;

  margin: 0;
`;

export const PointSearchP3 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #ffba35;

  margin: 0;
`;

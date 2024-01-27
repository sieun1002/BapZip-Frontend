import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeftImage = styled.img`
  width: 40px;
  height: 18.15px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const XImage = styled.img`
  width: 40px;
  height: 18.15px;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const MainPDiv = styled.div`
  width: 420px;
  height: 90px;
  /* background-color: #f97fff; */

  margin-top: 50px;
`;

export const MainP = styled.div`
  width: 420px;
  height: 42px;
  display: flex;
  justify-content: flex-start;
  /* background-color: aquamarine; */

  font-size: 30px;
  font-weight: 700;
`;

export const Highlight = styled.div`
  color: #ffba35;
  margin: 0 4px;
`;

export const SearchBoxDiv = styled.div`
  width: 420px;
  height: 60px;
  /* background-color: #1469b3; */

  position: relative;

  margin: 42px 0 45px 0;
`;

export const SearchBox = styled.input`
  width: 420px;
  height: 55px;

  border-radius: 10px;
  border: solid 1px #ffba35;

  padding-left: 17px;
  box-sizing: border-box;
`;

export const SearchImag = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 16px;
  right: 17px;
`;

export const ExPDiv = styled.div`
  width: 420px;
  height: 120px;
  /* background-color: #14b31f3f; */

  margin-bottom: 65%;
`;

export const ExP1 = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const ExP2 = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #767676;

  margin: 0;
`;

export const CircleImgDiv = styled.div`
  width: 30px;
  height: 10px;
  /* background-color: #a814b33e; */

  ${flexCenter()}
  justify-content: space-between;
`;

export const CircleImage = styled.img`
  width: 9px;
  height: 9px;
`;

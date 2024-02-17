import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchSchoolWrapper = styled.div`
  width: 480px;
  height: 465px;

  position: fixed;
  bottom: 0;

  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 4px 0 #00000040;
  background-color: #ffffff;

  ${flexCenter()}
  flex-direction: column;
  justify-content: flex-start;

  z-index: 1000000;
`;

export const HeaderDiv = styled.div`
  width: 420px;
  /* background-color: beige; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TitleP = styled.p`
  margin: 15px 35px 0 0;

  font-size: 20px;
  font-weight: 700;
  color: #191919;
`;

export const SearchBarDiv = styled.div`
  width: 420px;
  height: 42px;
  border-radius: 40px;

  margin: 10px 0 20px 0;

  background-color: #f6f6f6;

  position: relative;
`;

export const SearchImg = styled.img`
  width: 23px;
  height: 23px;

  position: absolute;
  top: 10px;
  left: 10px;
`;

export const SearchInput = styled.input`
  width: 360px;
  height: 23px;

  border: 0;
  background-color: #f6f6f6;

  position: absolute;
  top: 10px;
  left: 40px;

  &:focus {
    outline: none;
  }
`;

export const HeaderDiv2 = styled.div`
  width: 480px;
  height: 45px;
  display: flex;
  background-color: #f6f6f6;
`;

export const CityAndDoDiv = styled.div`
  width: ${(props) => props.w || "120px"};
  height: 46px;

  font-size: 16px;
  font-weight: ${(props) => props.fw || "600"};
  color: #191919;

  &:hover {
    background-color: #fff8ec;
  }

  ${flexCenter()}
  border-right: 1px solid rgba(217, 217, 217, 0);

  padding-left: 13px;
  box-sizing: border-box;

  cursor: pointer;
`;

export const CityAndDoDivs = styled.div`
  width: ${(props) => props.w || "130px"};
  height: 45px;

  font-size: 16px;
  font-weight: ${(props) => props.fw || "600"};
  color: #191919;

  ${flexCenter()}
  border-right: 1px solid #D9D9D9;
`;

export const SchoolDivs = styled.div`
  width: 350px;
  height: 45px;

  ${flexCenter()}
  justify-content: ${(props) => props.jc || "flex-start"};

  font-size: 16px;
  font-weight: 600;
  color: #191919;
`;

export const AllSchoolWrapper = styled.div`
  width: 350px;
  height: auto;
`;

export const SchoolDiv = styled.div`
  width: 340px;
  height: 46px;

  ${flexCenter()}
  justify-content: ${(props) => props.jc || "flex-start"};

  font-size: 16px;
  font-weight: 500;
  color: #191919;

  padding-left: 20px;
  box-sizing: border-box;

  &:hover {
    background-color: #fff8ec;
  }

  cursor: pointer;
`;

export const AllDiv = styled.div`
  width: 480px;
  height: 230px;

  display: flex;

  /* background-color: beige; */
`;

export const AllCityAndDoWrapper = styled.div`
  width: 130px;
  height: auto;
  border-right: 1px solid #d9d9d9;
`;

export const AllCityAndDoDiv = styled.div`
  width: 126px;
  height: 230px;

  overflow-y: scroll;

  /* background-color: azure; */

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 40px;
  }
`;

export const AllSchoolDiv = styled.div`
  width: 346px;
  height: 230px;

  /* background-color: #a52a2a50; */

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 480px;
  height: 72px;

  position: absolute;
  bottom: 0;

  box-shadow: 0 0 4px 0 #00000040;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px 0 30px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 206px;
  height: 45px;
  border-radius: 10px;
  border: 0px;

  background-color: ${(props) => props.bg || "#F6F6F6"};

  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color || "#191919"};

  cursor: pointer;
`;

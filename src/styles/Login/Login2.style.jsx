import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  width: 480px;
  height: 66px;
  /* background-color: #b5eab7; */
  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export const PDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  ${flexCenter()}
  margin: auto;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const ArrowLeftImage = styled.img`
  width: 40px;
  height: 18.15px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const MainDiv = styled.div`
  width: 480px;
  height: 500px;
  /* background-color: #c6b5ea; */
  ${flexCenter()}
  flex-direction: column;
  margin: auto;
`;

export const Form = styled.form`
  width: 460px;
  height: auto;
  ${flexCenter()}
  flex-direction: column;
  /* background-color: darkblue; */
  /* margin: auto; */
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  position: relative; //eyesImage 때문에 설정
`;

export const Input = styled.input`
  width: 420px;
  height: 55px;
  /* background-color: "#eab9b5"; */
  border: solid 1px #c0c0c0;
  border-radius: 10px;
  ${flexCenter()}
  justify-content:"start";

  margin-top: 20px;
  padding: 0 0 0 15px;
  box-sizing: border-box;
`;

export const EyesImage = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 35px;
  bottom: 13px;
`;

export const AutomaticLoginDiv = styled.div`
  width: 420px;
  height: 30px;
  /* background-color: #d8eab5; */
  ${flexCenter()}
  justify-content: start;

  font-size: 14px;
  font-weight: 500;

  margin-top: 10px;
`;

export const CircleImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Submit = styled.input`
  width: 420px;
  height: 55px;
  background-color: ${(props) => props.backgroundColor || "#ffba35"};

  border-radius: 10px;
  border: solid 0px;
  ${flexCenter()}

  margin-bottom: ${(props) => props.marginBottom || "15px"};
  margin-top: ${(props) => props.marginTop || "35px"};

  font-size: 18px;
  font-weight: 700;
  color: #ffffff;

  cursor: pointer;
`;

export const SearchDiv = styled.div`
  display: flex;
  /* background-color: #00008b5c; */
  width: 350px;
  height: 55px;
  ${flexCenter()}
  justify-content: space-around;
`;

export const Div2 = styled.div`
  border: solid 1px #767676;
  height: 10px;
`;

export const SearchList = styled.li`
  list-style: none;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
  color: #767676;
  font-size: 16px;
`;

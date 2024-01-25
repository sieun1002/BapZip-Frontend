import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const HeaderDiv = styled.div`
//   width: 480px;
//   height: 66px;
//   background-color: #b5eab7;
//   ${flexCenter()}

//   font-size: 18px;
//   font-weight: 600;
// `;

export const Label = styled.label`
  width: 420px;
  height: 30px;
  /* background-color: #eac4b5; */

  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`;

export const InputDiv = styled.div`
  width: 420px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* background-color: #7cc2ff; */
`;

export const Input = styled.input`
  width: ${(props) => props.width || "420px"};
  height: 55px;
  /* background-color: "#eab9b5"; */
  border: solid 0px;
  border-bottom: solid 1px #c0c0c0;
  ${flexCenter()}
  justify-content:"start";

  font-size: 14px;
  font-weight: 500;
`;

export const CheckDivX = styled.div`
  width: 420px;
  height: 40px;
  background-color: "#bbeab5";
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 500;

  color: #e32525;
`;

export const CheckDivO = styled.div`
  width: 420px;
  height: 40px;
  background-color: "#bbeab5";
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 500;

  color: #4ad917;
`;

export const Button = styled.button`
  width: 85px;
  height: 34px;
  border: solid 1px #ffba35;
  border-radius: 40px;
  background-color: #ffffff;

  color: #ffba35;
  font-size: 14px;
  font-weight: 600;
`;

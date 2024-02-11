import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PointForm = styled.form`
  width: 420px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: bisque; */
`;

export const PointFormLable = styled.div`
  width: 420px;
  height: 40px;

  font-size: 16px;
  font-weight: 600;
  color: #191919;

  display: flex;
  align-items: center;

  /* background-color: #a1f9f9; */
`;

export const PointFormInput = styled.input`
  width: 420px;
  height: 55px;
  border-radius: 10px;
  border: solid 1px #c0c0c0;

  color: ${(props) => props.color || "#C0C0C0"};
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight || "500"};

  margin-bottom: 10px;
`;

export const FinalCoupon = styled.div`
  width: 480px;
  height: 87px;

  padding: 0 30px 0 30px;
  box-sizing: border-box;

  background-color: #f6f6f6;

  ${flexCenter()}
  justify-content: space-between;
`;

export const FinalP1 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #191919;
  margin: 0;
`;

export const FinalP2 = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #e32525;
  margin: 0;
`;

export const Button = styled.button`
  width: 420px;
  height: 55px;
  border-radius: 10px;

  background-color: #ededed;

  border: 0;

  margin: 30px 0 50px 0;

  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const CautionDiv = styled.div`
  width: 420px;
  font-size: 14px;
  font-weight: 500;
  color: #767676;

  margin-bottom: 50px;
`;

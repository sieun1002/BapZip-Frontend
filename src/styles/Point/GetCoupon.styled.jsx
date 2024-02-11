import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CouponWrapper = styled.div`
  min-width: 358px;
  min-height: 238px;

  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 4px 0 #00000040;

  padding: 20px 0 20px 0;
  box-sizing: border-box;

  ${flexCenter()}
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 254px;
  min-height: 93px;
  background-color: beige;

  position: relative;
`;

export const MainP = styled.div`
  min-width: 254px;
  min-height: 23px;

  font-size: 17px;
  font-weight: 600;
  color: #191919;
`;

export const GetCouponImg = styled.img`
  width: 254px;
  height: 93px;
`;

export const GetCouponLineImg = styled.img`
  width: 3px;
  height: 90px;

  position: absolute;
  right: 80px;
`;

export const GetCouponBarcodeImg = styled.img`
  width: 55px;
  height: 75px;

  position: absolute;
  right: 15px;
  top: 10px;
`;

export const GetCouponP = styled.p`
  font-size: 34px;
  font-weight: 600;

  color: #ffba35;
  margin: 0;

  position: absolute;
  top: 20px;
  left: 30px;
`;

export const Botton = styled.button`
  width: 321.57px;
  height: 42px;

  background-color: #ffba35;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  border-radius: 10px;
  border: 0px;
`;

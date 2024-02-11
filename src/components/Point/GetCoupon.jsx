import React from "react";
import {
  PointDiv,
  PointImg,
  PointP,
  PointButton,
  BodDiv,
  WrappeDiv,
} from "../../styles/RestaurantInfo/CongestionCheck.styled";

import {
  ImgWrapper,
  GetCouponImg,
  GetCouponLineImg,
  GetCouponBarcodeImg,
  GetCouponP,
  CouponWrapper,
  MainP,
  Botton,
} from "../../styles/Point/GetCoupon.styled";

import getCoupon from "../../images/Point/getCuoponLayer.svg";
import getCouponLine from "../../images/Point/getCouponLine.svg";
import getCouponBarcode from "../../images/Point/getCouponBarcode.svg";

export default function GetCoupon(setgetCouponValid) {
  return (
    <div>
      <BodDiv>
        <WrappeDiv>
          {/* <PointDiv>
            <PointP>5포인트 적립 완료</PointP>
            <PointImg src={} alt="point" />
            <PointButton
              type="button"
              onClick={() => {
              }}
            >
              확인
            </PointButton>
          </PointDiv> */}

          <CouponWrapper>
            <MainP>3,000원 할인 쿠폰이 지급되었습니다.</MainP>
            <ImgWrapper>
              <GetCouponImg src={getCoupon} alt="getCoupon" />
              <GetCouponLineImg src={getCouponLine} alt="getCouponLine" />
              <GetCouponBarcodeImg
                src={getCouponBarcode}
                alt="GetCouponBarcode"
              />
              <GetCouponP>3,000원</GetCouponP>
            </ImgWrapper>
            <Botton
              type="button"
              onClick={() => {
                setgetCouponValid(false);
              }}
            >
              확인
            </Botton>
          </CouponWrapper>
        </WrappeDiv>
      </BodDiv>
    </div>
  );
}

import React from "react";
import {
  PointDiv,
  PointImg,
  PointP,
  PointButton,
  BodDiv,
  WrappeDiv,
} from "../../styles/RestaurantInfo/CongestionCheck.styled";
import point from "../../images/RestaurantInfo/point.svg";

export default function SavePoint({ setPoint, setCongestionCheck }) {
  return (
    <div>
      <BodDiv>
        <WrappeDiv>
          <PointDiv>
            <PointP>5포인트 적립 완료</PointP>
            <PointImg src={point} alt="point" />
            <PointButton
              type="button"
              onClick={() => {
                setPoint(false);
                setCongestionCheck(false);
              }}
            >
              확인
            </PointButton>
          </PointDiv>
        </WrappeDiv>
      </BodDiv>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import api from "../../api/LoginTokenApi";

import { BodyDiv, WrapperDiv, Div } from "../../styles/Point/Point.styled";

import {
  PointForm,
  PointFormLable,
  PointFormInput,
  FinalCoupon,
  FinalP1,
  FinalP2,
  Button,
  CautionDiv,
  FailedConvertDiv,
  FailedConvertP,
} from "../../styles/Point/PointChange.styled";

import GetCoupon from "./GetCoupon";

export default function PointChange(props) {
  const allPoint = props.allPoint;

  const [convertPoint, setConvertPoint] = useState({});
  const [remainingPoint, setRemainingPoint] = useState(0);
  const [form, setForm] = useState({
    changePoints: 0,
  });

  const [changePoints, setChangePoints] = useState(form.changePoints);
  const [getCouponValid, setgetCouponValid] = useState(false);

  //포인트 입력
  const handlePointsCh = (e, allPoint) => {
    const changePoint = parseInt(e.target.value, 10);

    setForm({ ...form, changePoints: changePoint });
    if (form.changePoints > allPoint) {
      setForm({ ...form, changePoints: allPoint });
    }

    if (e.target.value === "") {
      setRemainingPoint(0);
    } else {
      setRemainingPoint(allPoint - changePoint);
    }
  };
  const convertPointApi = async () => {
    try {
      //API 요청 URL
      const url = "https://babzip.seunga.shop/coupon/convertPoint";

      //요청 본문에 포함될 데이터
      const data = {
        issuedPoints: form.changePoints,
        totalPoints: allPoint,
      };

      //axios.post 메소드를 사용하여 요청을 보냄
      const response = await api.post(url, data);

      console.log("convertApi successful", response.data.result);
      setConvertPoint(response.data.result);
    } catch (error) {
      console.error(
        "convertApi error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가.
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <PointForm>
            <PointFormLable>전환 포인트</PointFormLable>

            <PointFormInput
              type="number"
              id="changePoint"
              placeholder="전환할 포인트를 입력하세요"
              onChange={(e) => handlePointsCh(e, allPoint)}
            />
            <PointFormLable>예정 잔여 포인트</PointFormLable>
            <PointFormInput id="changePoint" value={remainingPoint} />
          </PointForm>

          <FinalCoupon>
            <FinalP1>할인 쿠폰 금액</FinalP1>
            <FinalP2>{form.changePoints ? form.changePoints : 0}P</FinalP2>

            {console.log(form.changePoints, typeof form.changePoints)}
          </FinalCoupon>
          <Button
            type="button"
            onClick={() => {
              convertPointApi();
              setgetCouponValid(true);
            }}
          >
            전환하기
          </Button>

          <CautionDiv>
            - 포인트 1000점당 할인 쿠폰 1,000원으로 전환됩니다. <br />-
            마이페이지 쿠폰함에서 바코드를 보여줄 시에 이용할 수 있습니다.{" "}
            <br />- 포인트는 1,000점 이상부터 1,000단위로 전환할 수 있습니다.
          </CautionDiv>

          {/* <GetCoupon /> */}

          {getCouponValid === true ? (
            <GetCoupon
              setgetCouponValid={setgetCouponValid}
              changePoint={form.changePoints}
            />
          ) : null}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

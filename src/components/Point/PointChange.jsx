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
} from "../../styles/Point/PointChange.styled";

export default function PointChange() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <PointForm>
            <PointFormLable>전환 포인트</PointFormLable>
            <PointFormInput
              type="text"
              id="changePoint"
              placeholder="전환할 포인트를 입력하세요"
            />
            <PointFormLable>예정 잔여 포인트</PointFormLable>
            <PointFormInput
              type="text"
              id="changePoint"
              value="12,000P"
              color="#191919"
              fontWeight="600"
            />
          </PointForm>

          <FinalCoupon>
            <FinalP1>할인 쿠폰 금액</FinalP1>
            <FinalP2>3,000P</FinalP2>
          </FinalCoupon>
          <Button>전환하기</Button>

          <CautionDiv>
            - 포인트 1000점당 할인 쿠폰 1,000원으로 전환됩니다. <br />
            - 마이페이지 쿠폰함에서 바코드를 보여줄 시에 이용할 수 있습니다.{" "}
            <br />- 포인트는 1,000점 이상부터 1,000단위로 전환할 수 있습니다.
          </CautionDiv>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

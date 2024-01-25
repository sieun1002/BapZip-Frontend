import React from "react";
import { BodyDiv, WrapperDiv, Div } from "../../styles/LoginSelection.style";
import { HeaderDiv, Submit } from "../../styles/Login2.style";
import { XImage, MainPDiv, Highlight } from "../../styles/Select.style";

import { Link } from "react-router-dom";

import X from "../../images/Login/X.svg";

export default function SelectSchool() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
          <HeaderDiv justifyContent="flex-end">
            <XImage src={X} alt="X" />
          </HeaderDiv>

          <MainPDiv>
            어느 <Highlight>학교</Highlight>에
          </MainPDiv>
          <MainPDiv>다니고 계신가요?</MainPDiv>

          <Submit
            type="submit"
            value="다음"
            backgroundColor="#EDEDED"
            marginBottom="30px"
          />
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}

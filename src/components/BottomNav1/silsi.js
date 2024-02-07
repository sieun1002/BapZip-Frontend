// Silsi.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%; /* 전체 화면 너비에 대한 설정 */
  max-width: 420px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬을 위한 설정 */
  height: 52px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const Box = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #ffba35;
  box-shadow: 0px 0px 5px #ffdf77;
  border-radius: 10px;
`;

const Line = styled.div`
  position: absolute;
  width: 36px;
  height: 0px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  border: 1px solid #ffba35;
`;

const Silsi = () => {
  return (
    <Container>
      <Box />
      <Line />
    </Container>
  );
};

export default Silsi;

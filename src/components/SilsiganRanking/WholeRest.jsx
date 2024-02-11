import React from "react";
import styled from "styled-components";
import Restaurant from "../silsiganin/Restaurant";
import Restaurant2 from "../silsiganin/Restaurant2";
import Restaurant3 from "../silsiganin/Restaurant3";
import Restaurant4 from "../silsiganin/Restaurant4";
import Restaurant5 from "../silsiganin/Restaurant5";

export default function WholeRest() {
  return (
    <div style={{ height: "109vh" }}>
      <Restaurant />
      <Restaurant2 />
      <Restaurant3 />
      <Restaurant4 />
      <Restaurant5 />
    </div>
  );
}

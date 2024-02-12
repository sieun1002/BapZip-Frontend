import React from "react";
import styled from "styled-components";
import Restaurant from "../silsiganin/Restaurant";
import Restaurant2 from "../silsiganin/Restaurant2";
import Restaurant3 from "../silsiganin/Restaurant3";

export default function OutRest() {
  return (
    <div style={{ height: "109vh" }}>
      <Restaurant />
      <Restaurant2 />
      <Restaurant3 />
    </div>
  );
}

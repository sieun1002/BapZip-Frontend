import React from "react";
import styled from "styled-components";
import Header from "../components/silsiganout/Header";
import Searchbar from "../components/silsiganout/Searchbar";
import Restaurant from "../components/silsiganout/Restaurant";
import Restaurant2 from "../components/silsiganout/Restaurant2";
import Restaurant3 from "../components/silsiganout/Restaurant3";
import Restaurant4 from "../components/silsiganout/Restaurant4";
import Restaurant5 from "../components/silsiganout/Restaurant5";

export default function Silsiganout() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Restaurant />
      <Restaurant2 />
      <Restaurant3 />
      <Restaurant4 />
      <Restaurant5 />
    </div>
  );
}

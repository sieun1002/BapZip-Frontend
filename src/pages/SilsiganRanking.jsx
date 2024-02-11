import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/SilsiganRanking/Header";
import Searchbar from "../components/SilsiganRanking/Searchbar";
import SelectBar from "../components/SilsiganRanking/SelectBar";
import WholeRest from "../components/SilsiganRanking/WholeRest";
import InRest from "../components/SilsiganRanking/InRest";
import OutRest from "../components/SilsiganRanking/OutRest";

const Cont = styled.div`
  margin-top: 40px;
`;

export default function SilsiganRanking() {
  const [options, setOptions] = useState([true, false, false]);
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Cont>
        <SelectBar options={options} setOptions={setOptions} />
      </Cont>
      {options[0] ? <WholeRest /> : options[1] ? <InRest /> : <OutRest />}
    </div>
  );
}

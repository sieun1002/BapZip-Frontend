import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌트 정의
const BarChartContainer = styled.div``;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const BarDiv = styled.div`
  width: 237px;
  height: 4px;
  background-color: #f6f6f6;
  position: relative;
`;

const BarLabel = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  box-sizing: border-box;
`;

const Bar = styled.div`
  position: absolute;
  height: 4px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: black;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#ffa500" : "#ffcc00"};
  box-sizing: border-box;
  width: ${(props) => props.value}%;
  transition: width 0.5s ease-in-out;
`;

const BarValue = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #767676;
  margin: 0 0 0 0;
  margin-left: 5px;
`;

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarChartContainer>
      {data.map((item, index) => (
        <BarContainer key={index}>
          <BarLabel>{`${item.label}점`}</BarLabel>
          <BarDiv>
            <Bar value={(item.value / maxValue) * 100} index={index}>
              {/* {item.value} */}
            </Bar>
          </BarDiv>
          <BarValue>{item.value}</BarValue>
        </BarContainer>
      ))}
    </BarChartContainer>
  );
};

export default BarChart;

import React, { useState } from "react";

const containerStyle = {
  position: "absolute",
  width: "81px",
  height: "29px",
  background: "#FFFFFF",
};

const buttonStyle = {
  width: "45px",
  height: "22px",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
  textAlign: "right",
  color: "#191919",
};

const RestaurantBar = () => {
  const [selectedOption, setSelectedOption] = useState("추천순");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => handleButtonClick("추천순")}>
        {selectedOption === "추천순" && "추천순"}
      </button>
      <button style={buttonStyle} onClick={() => handleButtonClick("별점순")}>
        {selectedOption === "별점순" && "별점순"}
      </button>
      <button
        style={buttonStyle}
        onClick={() => handleButtonClick("리뷰많은순")}
      >
        {selectedOption === "리뷰많은순" && "리뷰많은순"}
      </button>
    </div>
  );
};

export default RestaurantBar;

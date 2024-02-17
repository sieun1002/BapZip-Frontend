import React from "react";
import { Link } from "react-router-dom";
import scrSearchIcon from "../../images/WriteReview/searchIcon.png";
import scrBackBtn from "../../images/WriteReview/backBtn.png";

export default function Header(props) {
  return (
    <div className="header-MainSearch">
      <Link to="/Home">
        <img src={scrBackBtn} alt="뒤로가기" style={{width:"26px", height:"26px", marginRight:"11px"}}/>
      </Link>
      <div className="search-SearchModal" style={{ height: "35px"}}>
        <img
          src={scrSearchIcon}
          alt="찾기 아이콘"
          style={{ width: "20px", height: "20px", marginRight: "8px", marginLeft: "10px", marginTop:"9px" }}
        />
        <input
          className="input-SearchModal"
          type="text"
          placeholder={props.text.length === 0 ? "오늘 내가 가고싶은 식당은?" : props.text}
          maxLength="15"
          onKeyUp={(e) => props.setTxt(e.target.value)}
          style={{height:"18px", fontSize:"12px", fontWeight:500, marginBottom:"12px"}}
        />
      </div>
    </div>
  );
}

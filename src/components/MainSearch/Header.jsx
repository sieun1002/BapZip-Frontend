import React from "react";
import { Link } from "react-router-dom";
import scrSearchIcon from "../../images/WriteReview/searchIcon.png";
import scrBackBtn from "../../images/WriteReview/backBtn.png";

const [input, setInput] = useState("");

export default function Header() {
  return (
    <div className="header-WriteReview">
      <Link to="/Home">
        <img src={scrBackBtn} alt="뒤로가기" />
      </Link>
      <div className="search-SearchModal">
        <img
          src={scrSearchIcon}
          alt="찾기 아이콘"
          style={{ width: "23px", height: "23px" }}
        />
        <input
          className="input-SearchModal"
          type="text"
          placeholder="식당명을 입력하세요. 예) 도봉 한식"
          maxLength="15"
          onKeyUp={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

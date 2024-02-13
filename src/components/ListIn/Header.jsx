import React from "react";
import { Link } from "react-router-dom";

import scrBackBtn from "../../images/WriteReview/backBtn.png";

export default function Header(props) {
  const title = props.title;
  return (
    <div className="header-WriteReview">
      <Link to="/List">
        <img src={scrBackBtn} alt="뒤로가기" />
      </Link>
      <p className="title-header">{title}</p>
    </div>
  );
}

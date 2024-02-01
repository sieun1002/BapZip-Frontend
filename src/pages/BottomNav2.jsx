import React from "react";
import Ad from "../components/BottomNav2/Ad";
import BottomNav from "../components/BottomNav";
import Header from "../components/BottomNav2/Header";
import ReviewRanking from "../components/BottomNav2/ReviewRanking";
import ReviewTimeline from "../components/BottomNav2/ReviewTimeline";
import { Link } from "react-router-dom";

import scrWriteBtn from "../images/BottomNav2/writeBtn.png";

export default function BottomNav2() {
  return (
    <div className="container-BottomNav2">
      <Header />
      <ReviewRanking />
      <Ad />
      <ReviewTimeline />
      <BottomNav menu="Review" />
      <Link to="/WriteReview">
        <img className="WriteBtn-BottomNav2" src={scrWriteBtn} alt="작성버튼" />
      </Link>
    </div>
  );
}

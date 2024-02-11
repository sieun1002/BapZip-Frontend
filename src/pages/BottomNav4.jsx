import React from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/BottomNav4/Header";
import Profile from "../components/BottomNav4/Profile";
import SelectBar from "../components/BottomNav4/SelectBar";
import MyZipStore from "../components/BottomNav4/MyZipStore";

export default function BottomNav4() {
  return (
    <div className="App">
      <div className="container-BottomNav4">
        <Header />
        <Profile />
        <SelectBar />
        <MyZipStore />
        <BottomNav menu="MyPage" />
      </div>
    </div>
  );
}

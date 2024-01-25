import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScrean from "../components/Login/SplashScrean";
import LoginSelection from "../components/Login/LoginSelection";
import Login2 from "../components/Login/Login2";

export default function Login1() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{showSplashScreen ? <SplashScrean /> : <LoginSelection />}</div>;
}

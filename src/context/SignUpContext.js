//전역 상태를 관리할 Context 생성.
import React, { createContext, useContext, useState, useEffect } from "react";

const SignUpContext = createContext();

export function useSignUp() {
  return useContext(SignUpContext);
}

export const SignUpProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    nickName: "",
    id: "",
    password: "",
    passwordCheck: "",
    school: " ",
    school_id: 0,
    major: " ",
    major_id: 0,
    schoolEmail: "",
    schoolEmailCheck: "",
    SignUpId: 0,
    user_id: 0,
    //추가적으로 필요한 상태가 있다면 여기에 포함시킨다.
  });

  const [validations, setValidations] = useState({
    isNickNameValid: null,
    isIdValid: null,
    isPasswordValid: null,
    isPasswordCheckValid: null,
    isSchoolAndMajor: null,
    isSchoolEmailValid: null,
  });

  const [congestion, setCongestion] = useState({
    congestionLevel: "",
    visitStatus: "",
    occupancyCount: 0,
    waitTime: 0,
  });

  const [schoolName, setSchoolName] = useState(
    localStorage.getItem("schoolName") || ""
  );

  // schoolName을 업데이트하는 함수
  const updateSchoolName = (newName) => {
    localStorage.setItem("schoolName", newName); // localStorage 업데이트
    setSchoolName(newName); // 상태 업데이트
  };
  useEffect(() => {
    const handleStorageChange = () => {
      setSchoolName(localStorage.getItem("schoolName") || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <SignUpContext.Provider
      value={{
        userInfo,
        setUserInfo,
        validations,
        setValidations,
        congestion,
        setCongestion,
        schoolName,
        setSchoolName,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

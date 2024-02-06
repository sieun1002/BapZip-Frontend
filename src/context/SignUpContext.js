//전역 상태를 관리할 Context 생성.
import React, { createContext, useContext, useState } from "react";

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
    //추가적으로 필요한 상태가 있다면 여기에 포함시킨다.
  });

  return (
    <SignUpContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </SignUpContext.Provider>
  );
};

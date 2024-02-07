import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//Redux Toolkit의 configureStore 함수를 사용해 스토어를 설정

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

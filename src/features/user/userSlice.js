import { createSlice } from "@reduxjs/toolkit";

//사용자 로그인 상태 및 액션을 관리할 슬라이스 생성.
//Redux Toolkit의 createSlice 함수를 사용하여 슬라이스를 생성할 수 있음

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { userId, token } = action.payload;
      state.userId = userId;
      state.token = token;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;

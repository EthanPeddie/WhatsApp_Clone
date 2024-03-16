import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
  },
  reducers: {
    authenticate: (state, actions) => {
      const { payload } = actions;
      state.token = payload.token;
      state.userData = payload.userData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate } = authSlice.actions;

export default authSlice.reducer;

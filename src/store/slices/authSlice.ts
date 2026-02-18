import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  acessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  acessToken:
    typeof window !== "undefined" ? localStorage.getItem("token") : null,
  refreshToken:
    typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("acessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      }
      state.acessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutUser: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("acessToken");
        localStorage.removeItem("refreshToken");
      }
      state.acessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { updateToken, logoutUser } = authSlice.actions;

export default authSlice.reducer;

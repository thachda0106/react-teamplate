import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./app.types";
import { fetchUserById } from "./app.thunk";

const initialState: AppState = {
  currentUser: {
    isLogin: false,
    data: null
  },
  loading: {
    count: 0,
    isLoading: false
  },
  mode: "light"
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = {
        count: state.loading.count++,
        isLoading: true
      };
    },
    toggleDarkMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addDefaultCase((state) => state);
  }
});

export const { setLoading, toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;

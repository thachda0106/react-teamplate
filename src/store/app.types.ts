import { PaletteMode } from "@mui/material";

export interface AppState {
  currentUser: User | null;
  loading: {
    count: number;
    isLoading: boolean;
  };
  mode: PaletteMode;
}

export interface User {
  isLogin: boolean;
  data: null;
}

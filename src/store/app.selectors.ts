import { RootState } from "./index";
import { AppState } from "./app.types";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectAppState = (state: RootState): AppState => state.app;

export const selectCurrentUser = createDraftSafeSelector(selectAppState, (app) => app.currentUser);

export const selectAppMode = createDraftSafeSelector(selectAppState, (app) => app.mode);

import { createAction } from "@reduxjs/toolkit";
import { User } from "./app.types";

export const signUp = createAction<User>("app/SIGN-UP");

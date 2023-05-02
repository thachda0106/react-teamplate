import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk("app/getUserById", async (userId: number) => {
  const response = await axios.get(`${import.meta.env.API}/${userId}`);
  return response.data;
});

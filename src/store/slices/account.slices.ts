import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { accountService } from "../../services";
import { Loading } from "../../models";

interface AccountState {
  selectForgetPasswordLoading: Loading;
}

const name = "account";
const initialState: AccountState = {
  selectForgetPasswordLoading: "idle",
};

export const forgetPassword = createAsyncThunk(
  `${name}/forgetPassword`,
  async (credentials: { email: string }, { rejectWithValue }) => {
    try {
      const response = await accountService.forgetPassword(credentials);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const accountSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.selectForgetPasswordLoading = "pending";
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.selectForgetPasswordLoading = "idle";
      })
      .addCase(forgetPassword.rejected, (state) => {
        state.selectForgetPasswordLoading = "idle";
      });
  },
});

export const selectForgetPasswordLoading = (state: RootState) =>
  state.account.selectForgetPasswordLoading;

export default accountSlice.reducer;

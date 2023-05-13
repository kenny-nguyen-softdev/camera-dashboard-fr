import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { accountService, cameraService, regionService, warningService } from "../../services";
import { Camera, Loading, Region, Warning } from "../../models";

interface AccountState {
  cameras: Camera[],
  camerasLoading: Loading,
  regions: Region[],
  regionsLoading: Loading,
  warnings: Warning[],
  warningLoading: Loading,
  selectForgetPasswordLoading: Loading;
}

const name = "account";
const initialState: AccountState = {
  cameras: [],
  camerasLoading: "idle",
  regions: [],
  regionsLoading: "idle",
  warnings: [],
  warningLoading: "idle",
  selectForgetPasswordLoading: "idle",
};

export const forgetPassword = createAsyncThunk(
  `${name}/forgetPassword`,
  async (credentials: { email: string }, { rejectWithValue }) => {
    try {
      const response = await accountService.forgetPassword(credentials);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchCameras = createAsyncThunk(
  `${name}/list-management-cameras`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await cameraService.getCameras();
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchRegions = createAsyncThunk(
  `${name}/list-management-regions`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await regionService.getRegions();
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchWarnings = createAsyncThunk(
  `${name}/list-management-warnings`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await warningService.getWarnings();
      return response;
    } catch (error: any) {
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
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.camerasLoading = "pending";
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.camerasLoading = "idle";
        console.log(action)
        state.cameras = action.payload;
      })
      .addCase(fetchCameras.rejected, (state) => {
        state.camerasLoading = "idle";
      });
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.regionsLoading = "pending";
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.regionsLoading = "idle";
        state.regions = action.payload;
      })
      .addCase(fetchRegions.rejected, (state) => {
        state.regionsLoading = "idle";
      });
    builder
      .addCase(fetchWarnings.pending, (state) => {
        state.warningLoading = "pending";
      })
      .addCase(fetchWarnings.fulfilled, (state, action) => {
        state.warningLoading = "idle";
        state.warnings = action.payload;
      })
      .addCase(fetchWarnings.rejected, (state) => {
        state.warningLoading = "idle";
      });
  },
});

export const selectForgetPasswordLoading = (state: RootState) =>
  state.account.selectForgetPasswordLoading;
export const selectCameras = (state: RootState) =>
  state.account.cameras;
export const selectCamerasLoading = (state: RootState) => state.account.camerasLoading;
export const selectRegions = (state: RootState) =>
  state.account.regions;
export const selectRegionsLoading = (state: RootState) => state.account.regionsLoading;
export const selectWarnings = (state: RootState) =>
  state.account.warnings;
export const selectWarningsLoading = (state: RootState) => state.account.warningLoading;

export default accountSlice.reducer;

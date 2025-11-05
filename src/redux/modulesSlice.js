import { createSlice } from "@reduxjs/toolkit";
import { fetchModules } from "../api/fetchModules";

const modulesSlice = createSlice({
  name: "modules",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchModules.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchModules.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default modulesSlice.reducer;

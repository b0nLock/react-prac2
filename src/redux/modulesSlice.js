import { createSlice } from "@reduxjs/toolkit";
import { fetchModules } from "../api/fetchModules";
import { postModule } from "../api/postModule";

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
      })

      .addCase(postModule.pending, (state) => {
        state.postStatus = "loading";
      })
      .addCase(postModule.fulfilled, (state, action) => {
        state.postStatus = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(postModule.rejected, (state, action) => {
        state.postStatus = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default modulesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../api/fetchCourses";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succedded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.items = action.payload || action.error.message;
      });
  },
});

export default coursesSlice.reducer;

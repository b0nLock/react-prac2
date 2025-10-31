import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3001/courses");
      if (!res.ok) throw new Error("Unable to fetch course. Server error.");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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

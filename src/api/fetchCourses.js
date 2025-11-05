import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const res = await fetch("http://localhost:3001/courses");
      if (!res.ok) throw new Error("Unable to fetch course. Server error.");
      return await res.json();
    } catch {
      return "";
    }
  }
);

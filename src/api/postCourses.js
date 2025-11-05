import { createAsyncThunk } from "@reduxjs/toolkit";

export const postCourse = createAsyncThunk(
  "modules/postCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3001/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });
      if (!res.ok) {
        const text = await res.text();
        return rejectWithValue({ status: res.status, message: text });
      }
      const json = await res.json();
      return json;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

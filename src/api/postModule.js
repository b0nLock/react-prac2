import { createAsyncThunk } from "@reduxjs/toolkit";

export const postModule = createAsyncThunk(
  "modules/postModule",
  async (moduleData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3001/modules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(moduleData),
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

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchModules = createAsyncThunk(
  "modules/fetchModules",
  async () => {
    try {
      const res = await fetch("http://localhost:3001/modules");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch {
      return "";
    }
  }
);

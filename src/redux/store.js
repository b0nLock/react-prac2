import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice";
import modulesReducer from "./modulesSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    modules: modulesReducer,
  },
});

export default store;

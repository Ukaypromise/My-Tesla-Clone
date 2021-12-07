import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/mycars/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

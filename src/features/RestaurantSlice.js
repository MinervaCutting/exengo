import { createSlice } from "@reduxjs/toolkit";
import { aiguadolçbeachbar } from "../vendors/aiguadolç_beachbar/data";
import { mimskybar } from "../vendors/mim_sky_bar/data";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    day1Dinner: aiguadolçbeachbar,
    day2Dinner: mimskybar,
  },
  reducers: {
    SET_DAY1DINNER: (state, action) => {
      state.day1Dinner = action.payload;
    },
    SET_DAY2DINNER: (state, action) => {
      state.day2Dinner = action.payload;
    },
  },
});

export const { SET_DAY1DINNER, SET_DAY2DINNER } = restaurantSlice.actions;

export const selectDay1Dinner = (state) => state.restaurant.day1Dinner;

export const selectDay2Dinner = (state) => state.restaurant.day2Dinner;

export default restaurantSlice.reducer;

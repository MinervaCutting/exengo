import { createSlice } from "@reduxjs/toolkit";
import { mim } from "../vendors/mim/data";

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotel: mim,
  },
  reducers: {
    SET_HOTEL: (state, action) => {
      state.hotel = action.payload;
    },
  },
});

export const { SET_HOTEL } = hotelSlice.actions;
export const selectHotel = (state) => state.hotel.hotel;

export default hotelSlice.reducer;

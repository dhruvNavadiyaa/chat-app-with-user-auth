import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connect: (state) => {
      state.value += 1;
    },
    disconnect: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { connect, disconnect } = socketSlice.actions;

export default socketSlice.reducer;

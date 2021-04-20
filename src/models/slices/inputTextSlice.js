import { createSlice } from "@reduxjs/toolkit";

const inputTextSlice = createSlice({
    name: 'inputText',
  initialState: {
    value: "",
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    updateText: (state, action) => {
      state.value = action.payload
    },
  },

});

export const { updateText } = inputTextSlice.actions;

export default inputTextSlice.reducer;
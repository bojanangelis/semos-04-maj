import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: "counter", // ova sekogash treba da ni e unique!!!!!
  //   initialState: initialState,
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

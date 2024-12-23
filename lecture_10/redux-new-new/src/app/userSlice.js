import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  password: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUsername: (state, action) => {
      console.log(action)
      console.log(state)
      state.username = action.payload
    },
    handlePassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { handlePassword, handleUsername } = userSlice.actions

export default userSlice.reducer

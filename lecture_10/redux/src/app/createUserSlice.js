import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {
    handleChangeFirstName: (state, action) => {
      state.firstName = action.payload
    },
  },
})

export const { handleChangeFirstName } = createUserSlice.actions

export default createUserSlice.reducer

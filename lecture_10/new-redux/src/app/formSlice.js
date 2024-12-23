import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleFirstName: (state, action) => {
      state.firstName = action.payload
    },
    handleLastName: (state, action) => {
      state.lastName = action.payload
    },
    handleEmail: (state, action) => {
      state.email = action.payload
    },
    handlePassword: (state, action) => {
      state.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleFirstName, handleLastName, handleEmail, handlePassword } =
  formSlice.actions

export default formSlice.reducer

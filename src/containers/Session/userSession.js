import { createSlice } from '@reduxjs/toolkit'

/**
 * Code to handle redux actions
 */


export const tokenSlice = createSlice({
  name: 'Token',
  initialState: {
    value: null,
  },
  reducers: {
    storeToken: (state, tokenValue) => {
      state.value = tokenValue.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
    askToken: (state) => {
      return state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeToken, clearToken, askToken } = tokenSlice.actions

export const selectToken = state => state.Token.value;


export default tokenSlice.reducer
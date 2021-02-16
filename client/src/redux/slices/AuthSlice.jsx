import { createSlice } from "@reduxjs/toolkit";

import { loadUser, registerUser, loginUser } from '../requests/AuthRequests';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  },
  extraReducers: {
    [loadUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loadUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem('token', action.payload.token);
    },
    [registerUser.rejected]: (state, action) => {
      localStorage.removeItem('token');

      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem('token', action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.removeItem('token');

      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    }
  },

  reducers: {

    authError: (state, action) => {

      localStorage.removeItem('token');

      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },


    logout: (state, action) => {

      localStorage.removeItem('token');

      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },

  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;


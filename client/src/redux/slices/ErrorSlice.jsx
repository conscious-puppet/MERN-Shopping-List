import { createSlice } from "@reduxjs/toolkit";


import { loadUser, registerUser, loginUser } from '../requests/AuthRequests';

import { getShoppingList, addItem, deleteItem, checkItem } from '../requests/ItemRequests';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    msg: {},
    status: null,
    id: null
  },

  extraReducers: {
    [loadUser.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = null;
    },
    [registerUser.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
    [loginUser.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },

    [getShoppingList.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
    [addItem.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
    [deleteItem.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
    [checkItem.rejected]: (state, action) => {
      state.msg = action.payload.data.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },

  },


  reducers: {
    clearErrors: (state, action) => {
      state.msg = {};
      state.id = null;
      state.status = null;
    }
  },

});

export const { clearErrors } = errorSlice.actions;

export default errorSlice.reducer;

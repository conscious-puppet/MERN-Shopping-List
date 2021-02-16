import { createAsyncThunk } from "@reduxjs/toolkit";

import { getErrors, clearErrors } from '../slices/ErrorSlice';

// Return errors

export const returnErrors = createAsyncThunk('error/returnErrors',
  async ({ msg, status, id = null }, { dispatch }) => {
    dispatch(getErrors({ msg, status, id }));
    return;
  });

// clear errors
export const clearError = createAsyncThunk('error/clearError',
  async ({ dispatch }) => {
    dispatch(clearErrors);
    return;
  });

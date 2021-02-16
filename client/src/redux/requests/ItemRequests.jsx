import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


import { tokenConfig } from './AuthRequests';


export const getShoppingList = createAsyncThunk("shoppingList/getShoppingList", async (_, { rejectWithValue }) => {
  try {

    const res = await axios.get('/api/items');
    return res.data;

  } catch (err) {
    return rejectWithValue({ data: err.response.data, status: err.response.status });
  }
});

export const addItem = createAsyncThunk("shoppingList/addItem",
  async (new_item, { rejectWithValue, getState }) => {

    try {
      await axios.post('/api/items', new_item, tokenConfig(getState));
      return new_item;

    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status });
    }


  });

export const deleteItem = createAsyncThunk("shoppingList/deleteItem",
  async ({ id }, { rejectWithValue, getState }) => {
    try {
      await axios.delete(`/api/items/${id}`, tokenConfig(getState));
      return { id };
    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status });
    }
  });

export const checkItem = createAsyncThunk("shoppingList/checkItem",
  async ({ id, isChecked }, { rejectWithValue, getState }) => {

    try {
      await axios.patch(`/api/items/${id}`, { isChecked }, tokenConfig(getState));
      return { id };

    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status });
    }
  });


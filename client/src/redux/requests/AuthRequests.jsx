import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const tokenConfig = getState => {
  // get token from localStorage
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    }
  };

  // if token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};


// Check token and load token
export const loadUser = createAsyncThunk('auth/loadUser',
  async (_, { getState, rejectWithValue }) => {
    //fetch the user
    try {
      const res = await axios.get('/api/auth/user', tokenConfig(getState));
      return { user: res.data };

    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status });
    }
  });

// Register user
export const registerUser = createAsyncThunk('auth/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Request body
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('/api/users', body, config);
      return res.data;

    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status, id: 'REGISTER_FAIL' });
    }
  });


// Login User
export const loginUser = createAsyncThunk('auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Request body
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/auth', body, config);
      return res.data;

    } catch (err) {
      return rejectWithValue({ data: err.response.data, status: err.response.status, id: 'LOGIN_FAIL' });
    }
  });

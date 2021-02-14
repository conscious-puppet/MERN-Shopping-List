import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getShoppingList = createAsyncThunk("shoppingList/getShoppingList", async () => {
  const res = await fetch(
    "/api/items"
  );
  const data = await res.json();
  return data;
});

export const addItem = createAsyncThunk("shoppingList/addItem", async (new_item, { dispatch, getState }) => {
  const res = await fetch(
    '/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(new_item)
  },
  );


  return res;
});

export const deleteItem = createAsyncThunk("shoppingList/deleteItem", async ({ id }, { dispatch, getState }) => {
  const res = await fetch(
    `/api/items/${id}`, {
    method: 'DELETE',
  },
  );

  // const data = await res.json();
  // return data;
  return res;
});

export const checkItem = createAsyncThunk("shoppingList/checkItem", async ({ id, isChecked }, { dispatch, getState }) => {
  const res = await fetch(
    `/api/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isChecked })
  },
  );

  // const data = await res.json();
  // return data;
  return res;
});




const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingList: [],
    loading: null,
  },
  extraReducers: {
    [getShoppingList.fulfilled]: (state, action) => {
      state.shoppingList = action.payload;
      state.loading = 'success';
    },

  },
  // reducers: {
  //   addShoppingItem: (state, action) => {
  //     state.shoppingList = [...state.shoppingList, { name: action.payload.name, isChecked: false }];
  //   },

  //   deleteShoppingItem: (state, action) => {
  //     state.shoppingList = state.shoppingList.filter(item => item.id !== action.payload.id);
  //   },

  //   checkShoppingItem: (state, action) => {
  //     state.shoppingList = (state.shoppingList.map(item => {
  //       if (item.id === action.payload.id) {
  //         item.isChecked = !item.isChecked;
  //       }
  //       return { ...item };
  //     }));
  //   }
  // }
});

// export const { addItem, deleteItem, checkItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

import { getShoppingList, deleteItem, checkItem, addItem } from '../requests/ItemRequests';


const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingList: [],
    loadingShoppingList: null,
  },
  extraReducers: {
    [getShoppingList.fulfilled]: (state, action) => {
      state.shoppingList = action.payload;
      state.loadingShoppingList = 'success';
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.shoppingList = state.shoppingList.filter(item => item._id !== action.payload.id);
    },
    [checkItem.fulfilled]: (state, action) => {
      state.shoppingList = (state.shoppingList.map(item => {
        if (item._id === action.payload.id) {
          item.isChecked = !item.isChecked;
        }
        return { ...item };
      }));
    },
    [addItem.fulfilled]: (state, action) => {
      state.shoppingList = [{ name: action.payload.name, isChecked: false }, ...state.shoppingList];
    },
    [deleteItem.rejected]: (state, action) => {
      console.log(action.payload.response);
    }

  }

});

// export const { addItem, deleteItem, checkItem } = shoppingListSlice.actions;


export default shoppingListSlice.reducer;


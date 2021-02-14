import { configureStore } from "@reduxjs/toolkit";

// import TodosSlice from "./slices/TodosSlice";
// import TodoDetailsSlice from "./slices/TodoDetailsSlice";
import shoppingListReducer from './slices/ShoppingListSlice';

const store = configureStore({
  reducer: {
    // todos: TodosSlice,
    // todoDetails: TodoDetailsSlice,
    shoppingList: shoppingListReducer
  },
});

export default store;

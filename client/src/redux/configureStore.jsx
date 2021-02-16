import { configureStore } from "@reduxjs/toolkit";

// import TodosSlice from "./slices/TodosSlice";
// import TodoDetailsSlice from "./slices/TodoDetailsSlice";
import shoppingListReducer from './slices/ShoppingListSlice';
import authReducer from "./slices/AuthSlice";
import errorReducer from "./slices/ErrorSlice";

const store = configureStore({
  reducer: {
    // todos: TodosSlice,
    // todoDetails: TodoDetailsSlice,
    shoppingList: shoppingListReducer,
    auth: authReducer,
    error: errorReducer
  },
});

export default store;

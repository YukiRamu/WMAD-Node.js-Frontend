/***** Needs to research how to use thunk ******/
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chatReducer from "./chatSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
 // middleware: [applyMiddleware(thunk), getDefaultMiddleware()]
});

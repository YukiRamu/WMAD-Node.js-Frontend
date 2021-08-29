import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { username: "", password: "" },
  room: ""
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("Inside chatSlice", state, action);
      //update state
      return [...state, action.payload];
    }
  }
});

//export reducer, actions,and state(selector)
export default chatSlice.reducer;
export const { login } = chatSlice.actions;
export const ChatSelector = state => state.chat;
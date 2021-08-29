import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { username: "", password: "" },
  room: ""
};

// Create the thunk
export const authorize = createAsyncThunk(
  'api/authorize',
  async (email, password) => {
    console.log(email, password);
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("Inside chatSlice", state, action);
      //update state
      return [...state, action.payload];
    }
  },
  extraReducers: {
    [authorize.fulfilled]: (state, action) => {
      // ... do state update here
    }
  }
});

//export reducer, actions,and state(selector)
export default chatSlice.reducer;
export const { login } = chatSlice.actions;
export const ChatSelector = state => state.chat;
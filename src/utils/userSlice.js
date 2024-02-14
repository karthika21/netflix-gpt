import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      return null;
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
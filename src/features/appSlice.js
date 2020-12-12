import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannel: (state, action) => {
      state.channelName = action.payload.channelName;
      state.channelId = action.payload.channelId;
    },
  },
});

export const { setChannel } = appSlice.actions;

export const selectChannel = (state) => state.app;

export default appSlice.reducer;

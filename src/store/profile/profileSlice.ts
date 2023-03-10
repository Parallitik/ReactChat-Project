import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'Serjik',
  visible: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

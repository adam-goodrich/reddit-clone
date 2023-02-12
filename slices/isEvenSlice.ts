import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface isEvenState {
  isEvenBool: boolean;
}

const initialState: isEvenState = {
  isEvenBool: true,
};

export const isEvenSlice = createSlice({
  name: 'isEven',
  initialState,
  reducers: {
    setIsEven: (state) => {
      state.isEvenBool = !state.isEvenBool;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsEven } = isEvenSlice.actions;

export const selectIsEven = (state: RootState) => state.isEven.isEvenBool;

export default isEvenSlice.reducer;

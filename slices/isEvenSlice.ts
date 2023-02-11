import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface isEvenState {
  isEven: boolean;
}

const initialState: isEvenState = {
  isEven: true,
};

export const isEvenSlice = createSlice({
  name: 'isEven',
  initialState,
  reducers: {
    setIsEven: (state) => {
      state.isEven = !state.isEven;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsEven } = isEvenSlice.actions;

export const selectIsEven = (state: RootState) => state.isEven.isEven;

export default isEvenSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment function
    incremented(state) {
      state.value++;
    },

    // Add an amount to the value
    addAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    // Decrement function
    decremented(state) {
      state.value--;
    },

    // Reset the value to 0
    reset(state) {
      state.value = 0;
    },
  },
});

export const { incremented, addAmount, decremented, reset } =
  counterSlice.actions;
export default counterSlice.reducer;

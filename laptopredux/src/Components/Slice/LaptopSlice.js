import { createSlice } from '@reduxjs/toolkit';

export const laptopSlice = createSlice({
    name: 'laptops',
    initialState: {
        laptops: [],
        count: 100
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      }
    },
  });

  export const { increment, decrement } = laptopSlice.actions;
  
  export default laptopSlice.reducer;

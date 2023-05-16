import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice(
  {
    name: 'category',
    initialState,
    reducers: {
      checkStatus: (state) => state,
    },
  },
);

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

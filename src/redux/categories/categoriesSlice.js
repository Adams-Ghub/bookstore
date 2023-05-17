import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};

const categoriesSlice = createSlice(
  {
    name: 'category',
    initialState,
    reducers: {
      checkStatus: (state) => { state.categoryList = 'Under Construction'; },

    },
  },
);

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

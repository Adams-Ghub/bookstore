import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBooks: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { removeBooks, addBooks } = booksSlice.actions;
export default booksSlice.reducer;

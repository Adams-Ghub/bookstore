import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item_id = uuid();
    const category = '';
    dispatch(
      addBook({
        title,
        author,
        item_id,
        category,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Add Books</h2>
      <input
        type="text"
        name="book"
        id="book-id"
        value={title}
        placeholder="Book title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        placeholder="Author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default AddBookForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import styles from '../styles/AddBookForm.module.css';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item_id = uuid();
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
      className={styles['main-container']}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2 className={styles['add-book-text']}>Add Books</h2>

      <div className={styles['form-inputs-container']}>
        <input
          type="text"
          name="book"
          id="book-id"
          required
          className={styles['title-input']}
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
          required
          className={styles['author-input']}
          value={author}
          placeholder="Author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <select
          name="category"
          value={category}
          defaultValue=""
          className={styles['category-input']}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>
          <option value="Sociology">Sociology</option>
        </select>
        <input type="submit" value="ADD BOOK" className={styles['add-book-button']} />
      </div>
    </form>
  );
};

export default AddBookForm;

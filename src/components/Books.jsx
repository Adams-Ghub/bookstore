import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import { getAllBooks } from '../redux/books/booksSlice';
import styles from '../styles/Books.module.css';

const Books = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const booksArray = Object.keys(books);
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h1>Oops!!! something went wrong</h1>
      </div>
    );
  }

  return (
    <div className={styles['main-container']}>
      <BookList allBooks={booksArray} />
      <AddBookForm />
    </div>
  );
};
export default Books;

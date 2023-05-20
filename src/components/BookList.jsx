import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import styles from '../styles/Booklist.module.css';

const BookList = ({ allBooks }) => {
  const { books } = useSelector((state) => state.books);

  return (
    <div className={styles['main-container']}>
      {

    allBooks.map((item) => {
      const element = books[item][0];
      return (

        <BookItem
          title={element.title}
          author={element.author}
          category={element.category}
          id={item}
          key={item}
        />
      );
    })
}
    </div>
  );
};

BookList.propTypes = {
  allBooks: PropTypes.array.isRequired,
};

export default BookList;

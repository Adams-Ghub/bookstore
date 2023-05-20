import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import styles from '../styles/BookItem.module.css';
import ProgressBar from './ProgressBar';

const BookItem = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['main-container']}>
      <div className={styles['book-info-container']}>
        <p className={styles['category-text']}>{category}</p>
        <h2 className={styles['title-text']}>{title}</h2>
        <p className={styles['author-text']}>{author}</p>
        <div className={styles['book-buttons-container']}>
          <input type="button" value="Comments" className={styles['comments-button']} />
          <input
            className={styles['remove-button']}
            type="button"
            value="Remove"
            onClick={() => dispatch(deleteBook(id))}
          />
          <input type="button" value="Edit" className={styles['edit-button']} />
        </div>
      </div>
      <div className={styles['progress-bar-container']}>
        <ProgressBar percentage={70} />
      </div>
      <div className={styles['chapter-info-container']}>
        <p className={styles['current-chapter-text']}>CURRENT CHAPTER</p>
        <p className={styles['chapter-text']}>Chapter 17</p>
        <input className={styles['update-progress-btn']} type="button" value="UPDATE PROGRESS" />
      </div>

    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;

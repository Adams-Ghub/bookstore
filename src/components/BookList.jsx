import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ allBooks }) => (
  <div>
    {allBooks.map((item) => (
      <BookItem title={item.title} key={item.id} />
    ))}
  </div>
);

BookList.propTypes = {
  allBooks: PropTypes.array.isRequired,
};

export default BookList;

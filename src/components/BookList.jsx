import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ allBooks }) => (
  <div>
    {allBooks.map((item) => (
      <BookItem title={item.title} author={item.author} id={item.item_id} key={item.item_id} />
    ))}
  </div>
);

BookList.propTypes = {
  allBooks: PropTypes.array.isRequired,
};

export default BookList;

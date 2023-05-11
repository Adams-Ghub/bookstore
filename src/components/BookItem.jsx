import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title, author }) => (
  <div>
    <span>{`${title} by `}</span>
    <span>{author}</span>
    <input type="button" value="delete" />
  </div>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;

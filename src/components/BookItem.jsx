import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title }) => (
  <div>
    <span>{title}</span>
    <input type="button" value="delete" />
  </div>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookItem;

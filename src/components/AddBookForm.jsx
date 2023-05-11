import React from 'react';

const AddBookForm = () => (
  <form action="">
    <h2>Add Books</h2>
    <input type="text" name="book" id="book-id" placeholder="Book title" />
    <input type="text" name="author" id="author" placeholder="Author" />
    <input type="button" value="ADD BOOK" />
  </form>
);

export default AddBookForm;

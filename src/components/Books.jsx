import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: '1',
      title: 'The Lord of the Rings',
      author: 'John Snow',
    },
    {
      id: '2',
      title: 'The Game of Thrones',
      author: 'John Sterling',
    },
    {
      id: '3',
      title: 'The Legend of the seeker',
      author: 'Peter Pan',
    },
  ]);

  return (
    <div>
      <BookList allBooks={books} />
      <AddBookForm />
    </div>

  );
};
export default Books;

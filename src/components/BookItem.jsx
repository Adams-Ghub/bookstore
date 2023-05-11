import React from 'react';

const BookItem = ({author}) => {
    const {author}= props;
    return(
        <div>
          <span>{author}</span>
          <input type="button" value="delete" />
        </div>
      );
}
export default BookItem;

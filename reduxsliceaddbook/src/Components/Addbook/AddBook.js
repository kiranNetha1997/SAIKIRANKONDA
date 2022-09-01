
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../Slice/bookslice';

const AddBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');

  const [error, setError] = useState({
    title: "",
    author: "",
    rating: ""
  });

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, rating, id: nanoid() }));
    setTitle("");
    setAuthor('');
    setRating('')

  };

  return (
    <form className='add-book'>
      <div>
        <label>Title</label>
        <input
          name='title'
          value={title}

          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title !== "" &&
          <p className="error-msg">{setError.title}</p>}

      </div>
      <div>
        <label>Author</label>
        <input
          name='author'
          value={author}

          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          name='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type='number'
          min='1'
          max='10'
        />
      </div>
      <button onClick={addBookHandler}> Add Book</button>
    </form>
  );
};

export default AddBook;
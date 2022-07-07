import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getBooks, deleteBook } from '../../store/Slice';
import './book.css';
import { useDispatch, useSelector } from 'react-redux';

const PostContainer = () => {

  const dispatch = useDispatch();
  const [read, setRead] = useState(null);
  const {isLoading} = useSelector(state => state.books);
  const {book} = useSelector(state => state.books);

  useEffect(()=>{
    dispatch(getBooks ()); 
    
  },[dispatch])

  const details = (id) => {
    const newBook = book.find(el => el.id === id);
    setRead((prev) => {
      return {...prev,...newBook}
    })
  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading = {isLoading}
          book={book}
          deleteBook={deleteBook}
          dispatch = {dispatch}
          details= {details}
          />
        </div>
        <div className='col side-line'>
          <BookInfo read = {read}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;

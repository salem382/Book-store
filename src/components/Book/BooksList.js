import React, { useState } from 'react';
import { useSelector } from 'react-redux';





const BooksList = ({isLoading, book, deleteBook, dispatch, details}) => {


const {isLogIn} = useSelector(state => state.auth)

const listBooks = book.map(item => <li key={item.id} className='list-group-item d-flex  justify-content-between align-items-center'>
<div>{item.title}</div>
<div className='btn-group' role='group'>
  <button type='button' className='btn btn-primary' 
  disabled={!isLogIn}
  onClick = {() => details (item.id)}
  >
    Read
  </button>
  <button type='button' className='btn btn-danger' 
  disabled= {!isLogIn} 
  onClick = {() => dispatch(deleteBook(item.id))}>
    Delete
  </button>
</div>
</li>) 

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? ('loading..'): (
        <ul className='list-group'>
          {listBooks}
        </ul>
      )}
      
    </div>
  );
};

export default BooksList;

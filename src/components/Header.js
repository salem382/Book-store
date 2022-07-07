import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store/authSlice';

const Header = () => {

  const dispatch = useDispatch();
  const {error} = useSelector(state => state.books);
  const {isLogIn} = useSelector(state => state.auth);

  return (
    <nav className='navbar navbar-dark bg-dark'>
      {error && error}
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit' onClick={()=> dispatch(logIn())}>
        {isLogIn ? 'log out' : 'log in'}
      </button>
    </nav>
  );
};

export default Header;

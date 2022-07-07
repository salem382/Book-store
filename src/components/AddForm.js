import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/Slice';

const Addform = () => {

  const dispatch = useDispatch();

  const value = useRef();
  const price = useRef();
  const desc = useRef();

  const {isLogIn} = useSelector(state => state.auth);


  const handleValues = (e) => {
    e.preventDefault();
    const data = {
      title:value.current.value,
      price:price.current.value,
      description:desc.current.value
    }
    dispatch(insertBook (data));
    console.log (data);
    value.current.value = '';
    desc.current.value = '';
    price.current.value = '';
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleValues}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input ref={value} type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input ref={price} type='number' className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea ref={desc}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLogIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;

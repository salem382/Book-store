import React, { Fragment, memo} from 'react';

const BookInfo = ({read}) => {
  
  console.log ();
  console.log ('re -render')

  return (
    <Fragment>

      <h2>Book Details</h2>
      {read? 
      (
        <div>
        <p className='fw-bold'>Title:{read.title}</p>
        <p className='fw-light'>Description:{read.description}</p>
        <p className='fst-italic'>Price:{read.price}</p>
      </div>
      ): (
        <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>
      )}
      
    </Fragment>
  );
};

export default BookInfo;

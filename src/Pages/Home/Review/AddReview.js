import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddReview = ({review}) => {
  const { email, comments } = review;
    return (
        <div className="border border-3 rounded-3 border-primary">
           <h5>{email}</h5>
             <h6 className='px-3'>{comments}</h6>

    </div>
    );
};

export default AddReview;
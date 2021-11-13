import React from 'react'

import StarRating from 'react-star-rating'
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddReview = ({review}) => {
  class FormComponent extends React.Component {

    render() { 
  const { email, comments,   } = review;
    return (
        <div className="border border-3 rounded-3 border-primary">
           <h5>{email}</h5>
             <h6 className='px-3'>{comments} </h6>

{/* 
<StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} /> */}

    </div>
    );
};
  }
}

export default AddReview;
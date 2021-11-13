import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import AddReview from './AddReview';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://pacific-hollows-59119.herokuapp.com/review')

            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
      <div>
      <h2 className="text-primary mt-5">Reviews</h2>
      <div className="order-container">
          {
             reviews.map(review => <AddReview
              key={review.id}
              review={review}
              >
      
              </AddReview>)

          }
          
      </div>
  </div>
    );
};

export default Reviews;
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import useFirebase from '../hooks/useFirebase';


const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
//   const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://pacific-hollows-59119.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };

    

  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
        //   value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
             <Link to='/reviews'></Link>
      </form>
    </div>
  );
};

export default Review;

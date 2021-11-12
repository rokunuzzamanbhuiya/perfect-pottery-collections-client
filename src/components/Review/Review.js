import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import './Review.css'
//import useFirebase from "../Hooks/useFirebase";

const Review = () => {
  const { register, handleSubmit } = useForm();
  //const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addreview", {
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
      <div className="container">
        <div className="row m-5">
          <div className="col-md-12 m-5 text-center">
            <h2>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input-field form-rev mb-4 mt-4 w-50"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <br />
              <input
                className="input-field form-rev mb-4 w-50"
                name="comments"
                placeholder="Comments"
                {...register("comments", { required: true })}
              />
              <br />
              <input
                className="input-field form-rev mb-4 w-50"
                name="rating"
                placeholder="Rating(1 to 5)"
                {...register("rating", { required: true })}
              />
              <br />

              <input
                className="submit-btn btn mt-2"
                type="submit"
                value="Submit Your Review"
              />
            </form>
            <NavLink
              className="text-center notfound shadow mt-5"
              to="/dashboard"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

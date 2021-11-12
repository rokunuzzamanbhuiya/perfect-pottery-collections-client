import React, { useEffect, useState } from "react";
import ReviewShow from "../ReviewShow/ReviewShow";


const ReviewGet = () => {
  const [reviews, setReviews] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section id="service-id" className="mt-5 container">
      <h1 className="text-center fw-bolder" style={{ color: "#865932" }}>
        MOST POPULAR COLLECTIONS
      </h1>
      <p className="text-center mb-5">
        To contribute to positive change and achieve our <br /> sustainability
        goals with many collections
      </p>

      <div className="row">
        {reviews.map((review) => (
          <ReviewShow key={review.id} review={review}></ReviewShow>
        ))}
      </div>
    </section>
  );
};

export default ReviewGet;

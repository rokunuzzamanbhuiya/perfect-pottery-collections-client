import React, { useEffect, useState } from "react";
import './ReviewGet.css'


const ReviewGet = () => {
  const [reviews, setReviews] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("https://dry-ravine-95776.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);

  return (
    <div class="event">
      <div className="container">
        <h1 className="text-center fw-bolder" style={{ color: "#ffffff" }}>
          OUR CLIENT REVIEWS
        </h1>
        <p className="text-center text-white mb-5">
          To contribute to positive change and achieve our <br /> sustainability
          goals with many collections
        </p>
        <div className="row">
          {reviews?.map((review, index) => (
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <h4 className="mb-3">{review?.name}</h4>
                  <p className="mb-3">{review?.comments}</p>
                  <div>
                    <i className="fas fa-star p-1 review"></i>
                    <i className="fas fa-star p-1 review"></i>
                    <i className="fas fa-star p-1 review"></i>
                    <i className="fas fa-star p-1 review"></i>
                    <i className="fas fa-star p-1 review"></i>
                  </div>
                  {/* <div>{review?.rating}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewGet;

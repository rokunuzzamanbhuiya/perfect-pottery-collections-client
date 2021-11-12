import React from 'react';
import "./ReviewShow.css";


const ReviewShow = (props) => {
  //const { name, comments, rating } = props.review;
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
          {/* <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">{name}</h4>
                <p className="mb-3">{comments}</p>
                <div>{rating}</div>
              </div>
            </div>
          </div> */}
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-2 text-center">
              <div className="border bg-light p-5 mb-4">
                <h4 className="mb-3">Masud Rana</h4>
                <p className="mb-3">
                  Our program is make you enjoy and explore the life. we ‘ll be
                  happy when see you and your family happy.
                </p>
                <div>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                  <i className="fas fa-star p-1 review"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewShow;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./ServiceCard.css";

// const ServiceCard = (props) => {
//   const { name, detail, picture, price, id } = props.service;
//   return (
//     <div className="mb-5 col-lg-4 col-sm-6 ">
//       <div className="card w-100 h-100 text-center serviceCard">
//         <div className="d-flex justify-content-center align-items-center p-2">
//           <img src={picture} className=" w-100 py-3 px-3 svcimg" alt="" />
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <p>{detail.slice(0, 95)}...</p>
//           <h5 className="card-price">${price}</h5>
//         </div>
//         <div className="card-footer">
//           <div className="d-flex align-items-center justify-content-center ">
//             <Link to={`/servicedetail/${id}`}>
//               <button className="btn btnservice my-2">
//                 Purchase Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
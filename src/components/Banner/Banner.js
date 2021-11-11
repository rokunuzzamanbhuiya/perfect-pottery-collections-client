import React from 'react';
import "./Banner.css";
import tour01 from "../../images/banner-images/tour01.png";
import tour02 from "../../images/banner-images/tour02.png";
import tour03 from "../../images/banner-images/tour03.png";


const Banner = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators pb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-7 tourone">
                  <h1 className="pb-2 text-white">
                    NEW AWESOME COLLECTION 2022 FROM PERFECT POTTERY
                  </h1>
                  <h2 className="text-white">Handmade Products Collection</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Purchase Now
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={tour01} className="d-block w-100" alt="tour" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-5">
                  <img src={tour02} className="d-block w-100" alt="tour" />
                </div>
                <div className="col-md-7 tourtwo">
                  <h1 className="pb-2 text-white">
                    NEW AWESOME COLLECTION 2022 FROM PERFECT POTTERY
                  </h1>
                  <h2 className="text-white">Handmade Products Collection</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center p-5 mt-5">
                <div className="col-md-7 tourthree">
                  <h1 className="pb-2 text-white">
                    NEW AWESOME COLLECTION 2022 FROM PERFECT POTTERY
                  </h1>
                  <h2 className="text-white">Handmade Products Collection</h2>
                  <button className="btn bannerbtn text-light mt-4">
                    Purchase Now
                  </button>
                </div>
                <div className="col-md-5">
                  <img src={tour03} className="d-block w-100" alt="tour" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
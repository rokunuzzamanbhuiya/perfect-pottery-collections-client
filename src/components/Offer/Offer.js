import React from 'react';
import "./Offer.css";
import offer01 from "../../images/banner-images/9.jpg";
import offer02 from "../../images/banner-images/10.jpg";

const Offer = () => {
    return (
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <div className="banner-img">
                  <img alt="image" src={offer01} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <div className="banner-img">
                  <img alt="image" src={offer02} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Offer;
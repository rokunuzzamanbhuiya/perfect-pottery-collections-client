import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section
        className="container-fluid d-flex justify-content-center align-items-center"
        id="subscribe"
      >
        <div className="my-5">
          <h1 className="text-center text-light pb-2">LET'S STAY IN TOUCH</h1>
          <p className="text-center pb-2 text-light">
            Get Updates On Specials Offers And More
          </p>
          <input
            className="form-control mb-2 formdesign"
            type="text"
            placeholder="Write Your Email"
          />
          <div className="d-grid">
            <button className="btn justify-content-center align-items-center mt-3 form-button">
              Subscribe For Any Offer
            </button>
          </div>
        </div>
      </section>

      <div className="p-3 footer-bottom justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="">
                <img src={logo} className="" alt="logo" />
              </Link>
            </div>
            <div className="col-md-5">
              <h6 className="text-color pt-4">© 2021-2022 Perfect Pottery Collections</h6>
            </div>
            <div className="col-md-3">
              <div className="pt-4">
                <span className="">
                  <Link to="#" title="">
                    <i className="fab fa-facebook-f ficon"></i>
                  </Link>
                </span>
                <span className="">
                  <Link to="#" title="">
                    <i className="fab fa-twitter ficon"></i>
                  </Link>
                </span>
                <span className="">
                  <Link to="#" title="">
                    <i className="fab fa-instagram ficon"></i>
                  </Link>
                </span>
                <span className="">
                  <Link to="#" title="">
                    <i className="fab fa-linkedin-in ficon"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

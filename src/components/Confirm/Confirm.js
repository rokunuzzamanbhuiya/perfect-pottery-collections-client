import React from 'react';
import "./Confirm.css";
import { Link } from 'react-router-dom';
import confirm from "../../images/confirm.png";

const Confirm = () => {
    return (
      <div>
        <div className="error">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center p-2">
                <img src={confirm} className="p-2 w-25" alt="" />
              </div>
              <h1 className="cnfmh1">CONGRATULATIONS!</h1>
              <h2 className="notfoundh2">Your Order Is Confirmed</h2>
              <p className="notfoundp">
                Thanks for stay with us. Have a nice tour. Wish you all the
                best.
              </p>
              <Link className="notfound shadow" to="/">
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Confirm;
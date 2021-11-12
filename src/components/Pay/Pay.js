import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pay.css'

const Pay = () => {
      return (
        <div>
          <div className="container">
            <div className="row m-5">
              <div className="col-md-12 m-5 text-center">
                <h2 className="text-center pay">Payment System Coming Soon.</h2>
                <NavLink className="text-center notfound shadow mt-5" to="/dashboard">
                  Go To Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
  };
  

export default Pay;
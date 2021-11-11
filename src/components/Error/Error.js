import React from 'react';
import "./Error.css";
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="error">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="notfoundh1">Oops!</h1>
                        <h2 className="notfoundh2">404 - Page not found</h2>
                        <p className="notfoundp">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <NavLink className="notfound shadow" to="/">Go To Home Page</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
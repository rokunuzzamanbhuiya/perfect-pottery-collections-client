import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddNewService from "../AddNewService/AddNewService";
import Review from "../Review/Review";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import useFirebase from "../Hooks/useFirebase";
import Pay from "../Pay/Pay";
import DashboardWelcome from "../DasboardWelcome/DasboardWelcome";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://dry-ravine-95776.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="dashboard-left">
              {isAdmin ? (
                <h4 className="mb-3">ADMIN DASHBOARD</h4>
              ) : (
                <h4 className="mb-3">USER DASHBOARD</h4>
              )}
              <div className="admin-dashboard">
                {isAdmin && (
                  <Link to={`${url}/manageallorders`}>
                    <li className="dashboard-menu">Manage All Orders</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/addnewservice`}>
                    <li className="dashboard-menu">Add New Service</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/makeadmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                )}
                {isAdmin && (
                  <Link to={`${url}/manageservices`}>
                    <li className="dashboard-menu">Manage Services</li>
                  </Link>
                )}
                {!isAdmin && (
                  <Link to={`${url}/pay`}>
                    <li className="dashboard-menu">Pay</li>
                  </Link>
                )}
                {!isAdmin && (
                  <Link to={`${url}/myorders`}>
                    <li className="dashboard-menu">My Orders</li>
                  </Link>
                )}
                {!isAdmin && (
                  <Link to={`${url}/review`}>
                    <li className="dashboard-menu">Review</li>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="dashboard-right">
              <Switch>
                <Route exact path={path}>
                  <DashboardWelcome></DashboardWelcome>
                </Route>
                <PrivateRoute exact path={`${path}/pay`}>
                  <Pay></Pay>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/myorders`}>
                  <MyOrders></MyOrders>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/review`}>
                  <Review></Review>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/addnewservice`}>
                  <AddNewService></AddNewService>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/manageservices`}>
                  <ManageServices></ManageServices>
                </PrivateRoute>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;



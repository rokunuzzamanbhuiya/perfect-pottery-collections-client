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

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
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
          <div className="col-md-3 col-sm-3">
            <div className="dashboard-left">
              <h5>Dashboard</h5>
              <div className="admin-dashboard">
                {isAdmin ? (
                  <>
                    <Link to={`${url}/manageallorders`}>
                      <li className="dashboard-menu">Manage All Orders</li>
                    </Link>
                    <Link to={`${url}/addnewservice`}>
                      <li className="dashboard-menu">Add New Service</li>
                    </Link>
                    <Link to={`${url}/makeadmin`}>
                      <li className="dashboard-menu">Make Admin</li>
                    </Link>
                    <Link to={`${url}/manageservices`}>
                      <li className="dashboard-menu">Manage Services</li>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={`${url}/pay`}>
                      <li className="dashboard-menu">Pay</li>
                    </Link>

                    <Link to={`${url}/myorders`}>
                      <li className="dashboard-menu">My Orders</li>
                    </Link>

                    <Link to={`${url}/review`}>
                      <li className="dashboard-menu">Review</li>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-3">
            <div className="dashboard-right">
              <Switch>
                <Route path={path}>
                  <DashboardWelcome></DashboardWelcome>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <Route path={`${path}/myorders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                  <Review></Review>
                </Route>
                <Route path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/addnewservice`}>
                  <AddNewService></AddNewService>
                </Route>
                <Route path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/manageservices`}>
                  <ManageServices></ManageServices>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;




// import React, { useEffect, useState } from "react";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

// import "./Dashboard.css";
// import AddNewService from "../AddNewService/AddNewService";
// import Review from "../Review/Review";
// import MyOrders from "../MyOrders/MyOrders";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
// import useFirebase from "../Hooks/useFirebase";

// const Dashbaord = () => {
//   let { path, url } = useRouteMatch();
//   const { user } = useFirebase();
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data[0]?.role === "admin") {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       });
//   }, [user?.email]);
//   console.log(isAdmin);
//   return (
//     <div>
//       <div className="dashboard-container ">
//         <div className="row">
//           <div className="col-md-3 ">
//             <div className="dashboard">
//               <h5>Dashboard</h5>
//               <Link to={`${url}`}>
//                 <li className="dashboard-menu mt-5">Admin</li>
//               </Link>

//               <Link to={`${url}/myOrders`}>
//                 <li className="dashboard-menu mt-5">My Orders</li>
//               </Link>

//               <Link to={`${url}/review`}>
//                 <li className="dashboard-menu mt-5">Review</li>
//               </Link>
//               <div className="admin-dashboard">
//                 <li className="dashboard-menu mt-5">Orders list</li>

//                 {isAdmin && (
//                   <Link to={`${url}/addNewService`}>
//                     <li className="dashboard-menu">Add New Service</li>
//                   </Link>
//                 )}
//                 <Link to={`${url}/makeAdmin`}>
//                   <li className="dashboard-menu">Make Admin</li>
//                 </Link>
//                 <Link to={`${url}/manageAllOrders`}>
//                   <li className="dashboard-menu">Manage All Orders</li>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-9">
//             <Switch>
//               <Route exact path={path}>
//                 <MyOrders></MyOrders>
//               </Route>
//               <Route exact path={`${path}/review`}>
//                 <Review></Review>
//               </Route>
//               <Route exact path={`${path}/myOrders`}>
//                 <MyOrders></MyOrders>
//               </Route>
//               <Route exact path={`${path}/makeAdmin`}>
//                 <MakeAdmin></MakeAdmin>
//               </Route>
//               <Route exact path={`${path}/addNewService`}>
//                 <AddNewService></AddNewService>
//               </Route>
//               <Route exact path={`${path}/manageAllOrders`}>
//                 <ManageAllOrders></ManageAllOrders>
//               </Route>
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashbaord;


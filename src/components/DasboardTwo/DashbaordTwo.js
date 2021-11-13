import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./DashboardTwo.css";
// import AddNewService from "../AddNewService/AddNewService";
// import Review from "../Review/Review";
// import MyOrders from "../MyOrders/MyOrders";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageServices from "../ManageServices/ManageServices";
import useFirebase from "../Hooks/useFirebase";
// import Pay from "../Pay/Pay";
// import DashboardWelcome from "../DasboardWelcome/DasboardWelcome";
// import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";

const DashbaordTwo = () => {
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
    <>
    <div
      class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
      id="sidebar"
    >
      <ul class="nav flex-column text-white w-100">
        <Link to="/dashboard" class="nav-link h3 text-white my-2">
          Dashboard
        </Link>
        <li to="/" class="nav-link">
          <i class="bx bxs-dashboard"></i>
          <span class="mx-2">Home</span>
        </li>
        <li href="#" class="nav-link">
          <i class="bx bx-user-check"></i>
          <span class="mx-2">Profile</span>
        </li>
        <li href="#" class="nav-link">
          <i class="bx bx-conversation"></i>
          <span class="mx-2">Contact</span>
        </li>
      </ul>

      <span href="#" class="nav-link h4 w-100 mb-5">
        <Link href=""><i class="bx bxl-instagram-alt text-white"></i></Link>
        <Link href=""><i class="bx bxl-twitter px-2 text-white"></i></Link>
        <Link href=""><i class="bx bxl-facebook text-white"></i></Link>
      </span>
      </div>
      

       {/* <!-- Main Wrapper --> */}
    <div class="p-1 my-container active-cont">
      {/* <!-- Top Nav --> */}
      <nav class="navbar top-navbar navbar-light bg-light px-5">
        <Link class="btn border-0" id="menu-btn"><i class="bx bx-menu"></i></Link>
      </nav>
      {/* <!--End Top Nav --> */}
      <h3 class="text-dark p-3">RESPONSIVE SIDEBAR NAV 💻 📱 
      </h3>
      <p class="px-3">Responsive navigation sidebar built using <a class="text-dark" href="https://getbootstrap.com/">Bootstrap 5</a>.</p>
    </div>
    </>
  


  );
};

export default DashbaordTwo;








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
//     fetch(`https://dry-ravine-95776.herokuapp.com/checkAdmin/${user?.email}`)
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


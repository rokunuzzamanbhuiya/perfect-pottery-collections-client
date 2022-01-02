import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewGet from "././components/ReviewGet/ReviewGet";
import './App.css';
import AuthProvider from "./components/Context/AuthProvider";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import AddNewService from "./components/AddNewService/AddNewService";
import Confirm from "./components/Confirm/Confirm";
import Offer from './components/Offer/Offer';
import Dashboard from './components/Dasboard/Dashbaord';
import Pay from './components/Pay/Pay';
import Review from './components/Review/Review';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageServices from './components/ManageServices/ManageServices';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <PrivateRoute exact path="/servicedetail/:detailId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/review">
            <ReviewGet></ReviewGet>
          </Route>
          <Route path="/offer">
            <Offer></Offer>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addnewservice">
            <AddNewService></AddNewService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageservices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/confirm">
            <Confirm></Confirm>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

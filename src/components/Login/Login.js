import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = useAuth();

const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")


const handleGetEmail = (e) =>{
  setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
    setPassword(e.target.value);
}

const handleLoginWithEmailAndPassword=(e)=>{
    e.preventDefault();

    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false)
      })
}

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => 
        {
          setIsLoading(true)
          setUser(res.user)
          history.push(url)
        }
          )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div class="login">
      <div className="container my-5 shadow py-5">
        <h2 className="mb-4 text-center log-bolder">Log In</h2>
        <div className="row text-center">
          <div className="col-md-12">
            <form onSubmit={handleLoginWithEmailAndPassword}>
              <input
                className="mb-3"
                type="email"
                onBlur={handleGetEmail}
                placeholder="Email"
              />
              <br />
              <input
                className="mb-3"
                type="password"
                onBlur={handleGetPassword}
                placeholder="Password"
              />
              <br />
              <input className="mb-3 login-btn" type="submit" value="Log In" />
            </form>
            <p>
              {" "}
              New User?<Link to="/register"> Please Sign Up</Link>
            </p>
            <span>Or</span>
            <br />
            <div class="mx-auto">
              <button
                className="mt-3 btn login-btn"
                onClick={handleGoogleLogin}
              >
                Google Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

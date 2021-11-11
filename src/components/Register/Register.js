import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
import "./Register.css";

const Register = () => {
   
     
const { signInWithGoogle, createAccountWithGoogle,setUser , setIsLoading , updateName } = useAuth();

const history= useHistory()
const location = useLocation()
const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
    console.log(e.target.value);
   setName(e.target.value)
}

const handleGetEmail=(e)=> {
    console.log(e.target.value);
   setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
    console.log(e.target.value);
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=> {
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
      <div class="signup">
        <div className="container my-5 shadow py-5">
          <h2 className="mb-4 text-center rg-bolder">Sign Up</h2>
          <div className="row text-center">
            <div className="col-md-12">
              <form onSubmit={handleRegistration}>
                <input
                  className="mb-3"
                  type="text"
                  onBlur={handleGetName}
                  placeholder="Name"
                />
                <br />
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
                <input
                  className="mb-3 reg-btn"
                  type="submit"
                  value="Create An Account"
                />
                <br />
              </form>
              <p>
                Already Have An Account?<Link to="/login"> Please Log In</Link>
              </p>
              <span>Or</span>
              <div class="mx-auto">
                <button
                  className="mt-3 btn reg-btn"
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

export default Register;
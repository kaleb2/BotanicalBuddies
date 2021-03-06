import React, { useState } from "react";
import { User } from "../services/UserService";
import { Link } from "react-router-dom";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const initialUserState = {
    email: "",
    password: "",
  };
  
  export const CreateUser = () => {
  
    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);
  
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };
  
    const saveUser = () => {
      User.create(user)
        .then(res => {
          setSubmitted(true);
          setSubmitFailed(false);
          console.log(res.data);
        })
        .catch(e => {
          setSubmitFailed(true);
          console.log("Error creating new user", e);
        })
    }
  
    return (
      <div className="container">
        {submitted ? (
          <>     
            <h4>Account created successfully!</h4>
            <Link to="/login" className="link">Sign in</Link>
          </>
        ) : (
          <>   
            {submitFailed && 
              <h2>Email already exists!</h2>
            }
            <CreateUserForm handleInputChange={handleInputChange} saveUser={saveUser} user={user} />
          </>
        )
        }
      </div>
    )
  }

export const CreateUserForm = ({ handleInputChange, saveUser, user }) => {
    return (
      <>
      <div className="container">
        <h2>Create New Account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
              className="form-control" />
          </div>
    
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
              className="form-control" />
          </div>
    
          <button type="button" className="btn botbutton" onClick={saveUser}>
            Create an Account
          </button>
          <div>
            <text>Already have an account? </text>
            <Link to="/login" className="link">Sign in</Link>
          </div>
        </form>
      </div></>
    )
  }
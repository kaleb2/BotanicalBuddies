import React, { useState } from "react";
import { User } from "../services/UserService";

const initialUserState = {
    email: "",
    password: "",
  };
  
  export const Login = () => {
  
    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);
  
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };
  
    const loginUser = () => {
      User.login(user)
        .then(res => {
          setSubmitted(true);
          setSubmitFailed(false);
          console.log(res.data);
        })
        .catch(e => {
          setSubmitFailed(true);
          console.log("Username & password did not match", e);
        })
    }
  
    const logoutUser = () => {
      setUser(initialUserState);
      setSubmitted(false);
    }
  
    return (
      <div>
        {submitted ? (
          <>     {/* If we've already submitted, show this piece*/}
            <h4>Welcome!</h4>
            <button type="button" className="btn btn-secondary" onClick={logoutUser}>
              Log out
            </button>
          </>
        ) : (
          <>   {/* If we've NOT already submitted, show this piece*/}
            {submitFailed && //This will only render if our prior submit failed
              //we could add a div here and style this separately
              <h2>Username & password did not match</h2>
            }
            <LoginForm handleInputChange={handleInputChange} loginUser={loginUser} user={user} />
          </>
        )
        }
      </div>
    )
  }

export const LoginForm = ({ handleInputChange, loginUser, user }) => {
    return (
      <><h2>Welcome back!</h2>
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
            type="text"
            id="password"
            required
            value={user.password}
            onChange={handleInputChange}
            name="password"
            className="form-control" />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={loginUser}>
          Log in
        </button>
      </form></>
    )
  }
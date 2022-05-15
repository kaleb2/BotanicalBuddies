import { useState } from "react";
import { User } from "../services/UserService";

const initialUserState = {
    email: "",
    password: "",
  };
  
  export const CreateUser = () => {
  
    
    return (
      <div>
        {submitted ? (
          <>     {/* If we've already submitted, show this piece*/}
            <h4>You submitted successfully!</h4>
            <button type="button" className="btn btn-secondary" onClick={resetUser}>
              Reset
            </button>
          </>
        ) : (
          <>   {/* If we've NOT already submitted, show this piece*/}
            {submitFailed && //This will only render if our prior submit failed
              //we could add a div here and style this separately
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
      <><h2>Create New User</h2>
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
  
        <button type="button" className="btn btn-primary" onClick={saveUser}>
          Create
        </button>
      </form></>
    )
  }
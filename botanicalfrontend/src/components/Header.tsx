import React from "react";
import { Link } from "react-router-dom";
import { getUserIdFromStorage, useAuth } from "../services/AuthService";



export const Header = () => {
    const context = useAuth();
    const userId = getUserIdFromStorage();

    const handleLogout = () => {
      console.log("Setting token to null");
      context?.handleLogout();
    }

    return (
        <div className="body">
            <div className="navbar navbar-expand-lg">
                <div className="container">
                    <div><h4>Botanical Buddies<sup>TM</sup></h4></div>
                    &nbsp; | &nbsp;
                    <Link to={"/user-profile/"+userId}>My Profile</Link>
                    &nbsp; | &nbsp;
                    <Link to="/journals">Journals</Link>
                    &nbsp; | &nbsp;
                    <Link to="/forums">Forums</Link>
                    &nbsp; | &nbsp;
                    { context?.token != null  ?
                        <Link className="link-primary" to="/login" onClick={handleLogout}>Logout</Link>
                        :
                        <Link className="link-primary" to="/login">Login</Link>
                    }
                    <br />
                </div>
            </div>
        </div>
    );
};


export default Header;
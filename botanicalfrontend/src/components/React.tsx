import { CreateUser } from "./CreateUser";
import { WelcomeButton } from "./WelcomeButton";
import logo from '../logo.svg';
import { Link, Outlet } from "react-router-dom";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export function ReactDefault() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <WelcomeButton/>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
};

export const NotFound = () => (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );

export const Header = () => {
    return (
      <div className="body">
        <div className="navbar navbar-expand-lg">
          <div className="container">
            <h1>Botanical Buddies^TM</h1>
            <Link to="/">Dashboard</Link>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
            &nbsp; | &nbsp;
            <Link to="/user-profile">My Profile</Link>
            &nbsp; | &nbsp;
            <Link to="/create-plant">Create Plant</Link>
            &nbsp; | &nbsp;
            <Link to="/create-user">Create User</Link>
            <br />
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    );
};
import { CreateUser } from "./CreateUser";
import { WelcomeButton } from "./WelcomeButton";
import logo from '../logo.svg';
import { Link, Outlet } from "react-router-dom";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { PlantsList } from "./PlantsList";
import getInitialState from "../initialState";
import { useEffect, useState } from "react";
import { Plant as PlantType} from "../types/StateTypes";

export function ReactDefault() {
    let [listOfPlants, setListOfPlants] = useState<Array<PlantType>>([]);

    useEffect(() => {
      let init = async () => {
        try {
          let initialState = await getInitialState();
          setListOfPlants(initialState.listOfPlants);
        } catch (err) {
          console.log(err);
        }
      }
      init();
    }, [])

    return (
        <div className="App">
            <div className="plantsList">
            <h2>Most recent plants:</h2>
                <PlantsList listOfPlants={listOfPlants}/>
            </div>
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
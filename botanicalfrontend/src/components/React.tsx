import { Link, Outlet } from "react-router-dom";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { PlantsList } from "./Plant/PlantsList";
import getInitialState from "../initialState";
import { useEffect, useState } from "react";
import { Plant as PlantType} from "../types/StateTypes";
import { getUserIdFromStorage, useAuth} from "../services/AuthService";

const userId = getUserIdFromStorage();

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
    const context = useAuth();

    const handleLogout = () => {
      console.log("Setting token to null");
      context?.handleLogout();
    }

    return (
      <div className="body">
        <div className="navbar navbar-expand-lg">
          <div className="container">
            <h3>Botanical Buddies</h3><sup>TM</sup>
            &nbsp; | &nbsp;
            <Link to="/create-plant">Create Plant</Link>
            &nbsp; | &nbsp;
            <Link to="/journals">Journals</Link>
            &nbsp; | &nbsp;
            <Link to="/forums">Forums</Link>
            &nbsp; | &nbsp;
            { context?.token != null  ?
              <><Link to={"/user-profile/"+userId}>My Profile</Link>
               &nbsp; | &nbsp;
              <Link className="link-primary" to="/login" onClick={handleLogout}>Logout</Link></>
              :
              <Link className="link-primary" to="/login">Login</Link>
            }
            <br />
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    );
};
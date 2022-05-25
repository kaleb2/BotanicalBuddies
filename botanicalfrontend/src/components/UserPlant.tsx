import { useEffect, useState } from "react";
import { CreatePlant } from "./CreatePlant";
import { PlantsList } from "./PlantsList";
import { Plant as PlantType} from "../types/StateTypes";
import getInitialState from "../initialState";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from "react-router-dom";
import { getPlant } from "../services/PlantService";

export type UserPlantProps = {
    name: string,
}

export function UserPlant() {
    let { id } = useParams();
    
    return (
        <div className="profile">
            <p>Plant profile for plant id {id}</p>
        </div>
    )
}
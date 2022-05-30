import { useEffect, useState } from "react";
import { CreatePlant } from "./CreatePlant";
import { PlantsList } from "./PlantsList";
import { Plant as PlantType} from "../../types/StateTypes";
import getInitialState from "../../initialState";
import '../../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link, useParams } from "react-router-dom";
import { getPlant } from "../../services/PlantService";

const initialPlantState = {
    plantId: 0,
    name: "",
    userId: 0,
    image: "",
    species: "",
    dateAcquired: new Date(),
    lastRepot: new Date(),
    lastFertilize: new Date()
  };

export function PlantPage() {
    let { id } = useParams();
    let [plant, setPlant] = useState(initialPlantState);

    useEffect(() => {
        console.log("get plant/" + id);
        let mounted = true;
        getPlant(id).then(item => {
            console.log(item);
            if (mounted) {
                setPlant(item);
                console.log(plant);
            }
        });
        return;
      }, []);


    
      return (
        <div className="plant-profile plant-profile-page">
            <div className="w-64 flex flex-wrap">
                <img src={plant.image} alt={plant.name} className="img-fluid float-left"/>
                <h1 className="w-64 ml-2">{plant.name}</h1>
                <p>Species: {plant.species}</p>
                <p>Date acquired: {plant.dateAcquired.toString()}</p>
                <p>Last time repot: {plant.lastRepot.toString()}</p>
                <p>Last time fertilized: {plant.lastFertilize.toString()}</p>
            </div>
        </div> 
      );
}
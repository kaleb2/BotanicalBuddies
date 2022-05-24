
import { WelcomeButton } from "./WelcomeButton";
import logo from '../logo.svg';
import { Plant } from "../services/PlantService";


export const PlantsList = event => {
    console.log(event.userId);
        Plant.get(event.userId).then(response => {
            console.log("This user's plants");
            console.log(response.data);
        }
        );

    return (
        <p>Plants for user #1</p>
    );
};
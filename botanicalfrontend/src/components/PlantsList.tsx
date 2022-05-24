
import { WelcomeButton } from "./WelcomeButton";
import logo from '../logo.svg';
import { Plant as PlantType} from "../types/StateTypes";
import { useEffect, useMemo } from "react";
import { Plant } from "../services/PlantService";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export type PlantProfileProps = PlantType & { onUnmatchButtonClick: (id: number) => void }

export function PlantProfile(props) {
        let {
            name,
            image,
        } = props;
    

    useEffect(() => {
        console.log(`Plant List Profile ${name} rerendered`);
      });

      return <div className="col-3">
      <div className="rounded-box botanical-img">
        <img src={image} alt={name} className="img-fluid"/>
      </div>
      <div className="w-64 flex flex-wrap justify-center">
        <span className="w-64 ml-2 text-center">{name}</span>
      </div>
    </div>;

}

export type PlantsListProps = {
    listOfPlants: Array<PlantType>,
  }


export function PlantsList({
    listOfPlants
  }: PlantsListProps) {
    

    return (
        <div className="row">
            <div className="col-12">Plants</div>
            <br/>
            {listOfPlants.map(
                profile =>
                <PlantProfile
                    key={profile.name}
                    {...profile} />
            )}
        </div>
    );
};
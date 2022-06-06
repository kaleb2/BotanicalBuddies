

import { Plant as PlantType} from "../../types/StateTypes";
import { useEffect } from "react";
import '../../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";

export function PlantProfile(props) {
        let {
            id,
            name,
            image
        } = props;
    

    useEffect(() => {
        console.log(`Plant List Profile ${name} rerendered`);
      });

      return <div className="col-3 plant-profile">
      <div className="rounded-box botanical-img">
        <img src={image} alt={name} className="img-fluid"/>
      </div>
      <div className="w-64 flex flex-wrap justify-center">
        <h3 className="w-64 ml-2 text-center">{name}</h3>
        <p className="text-center">Plant Id #{id}</p>
        <Link to={'/plants/' + id} className="link">View plant</Link>
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
            <br/>
            {listOfPlants.length > 0 ? listOfPlants.map(
                profile =>
                <PlantProfile
                    key={profile.name}
                    {...profile} />
            ): <p>No plants yet...</p>}
        </div>
    );
};
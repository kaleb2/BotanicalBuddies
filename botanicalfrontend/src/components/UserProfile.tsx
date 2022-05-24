import { useEffect, useState } from "react";
import { CreatePlant } from "./CreatePlant";
import { PlantsList } from "./PlantsList";
import { Plant as PlantType} from "../types/StateTypes";
import getInitialState from "../initialState";


export const UserProfile = event => {

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
        <div className="profile">
            <p>This is your profile!</p>

            <div className="plantsList">
            <h2>Your plants:</h2>
                <PlantsList listOfPlants={listOfPlants}/>
            </div>

            <CreatePlant/>
        </div>
    );
};
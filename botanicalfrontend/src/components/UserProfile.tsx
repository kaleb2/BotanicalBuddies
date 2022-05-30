import { useEffect, useState } from "react";
import { CreatePlant } from "./CreatePlant";
import { PlantsList } from "./PlantsList";
import { Plant as PlantType} from "../types/StateTypes";
import getInitialState from "../initialState";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ProfileJournalsList } from "./Journal/JournalsList";
import { CreateJournal } from "./Journal/CreateJournal";
import { Journal as JournalType} from "../types/StateTypes";
import { getJournals } from "../services/JournalService";


export const UserProfile = event => {

    let [listOfPlants, setListOfPlants] = useState<Array<PlantType>>([]);
    let [listOfJournals, setListOfJournals] = useState<Array<JournalType>>([]);

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

      useEffect(() => {
        let mounted = true;
        getJournals().then(items => {
            if (mounted) {
                setListOfJournals(items);
            }
        });
        return;
      }, []);

    return (
        <div className="profile">
            <p>This is your profile!</p>

            <div className="plantsList">
            <h2>My Plants:</h2>
                <PlantsList listOfPlants={listOfPlants}/>
            </div>

            <CreatePlant/>
            <h2>My Journals:</h2>
            <ProfileJournalsList listOfJournals={listOfJournals}/>

            <h1>Create a new journal</h1>
            <CreateJournal />
        </div>
    );
};
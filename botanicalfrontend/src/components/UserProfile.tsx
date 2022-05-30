import { useEffect, useState } from "react";
import { CreatePlant } from "./Plant/CreatePlant";
import { PlantsList } from "./Plant/PlantsList";
import { Plant as PlantType} from "../types/StateTypes";
import getInitialState from "../initialState";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ProfileJournalsList } from "./Journal/JournalsList";
import { CreateJournal } from "./Journal/CreateJournal";
import { Journal as JournalType} from "../types/StateTypes";
import { getJournals } from "../services/JournalService";
import { getPlants } from "../services/PlantService";


export const UserProfile = event => {

    let [listOfPlants, setListOfPlants] = useState<Array<PlantType>>([]);
    let [listOfJournals, setListOfJournals] = useState<Array<JournalType>>([]);
    let userId = 1;

    useEffect(() => {
      let mounted = true;
      getPlants(userId).then(items => {
          if (mounted) {
              setListOfPlants(items);
          }
      });
      return;
    }, []);

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
            <div className="plantSection">
              <div className="plantsList">
              <h2>My Plants:</h2>
                  <PlantsList listOfPlants={listOfPlants}/>

              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Add a new plant
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <CreatePlant/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="journalSection">
              <h2>My Journals:</h2>
              <ProfileJournalsList listOfJournals={listOfJournals}/>

              <div className="accordion" id="accordionJournal">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingJournal">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJournal" aria-expanded="true" aria-controls="collapseJournal">
                      Add a new journal
                    </button>
                  </h2>
                  <div id="collapseJournal" className="accordion-collapse collapse" aria-labelledby="headingJournal" data-bs-parent="#accordionJournal">
                    <div className="accordion-body">
                    <CreateJournal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};
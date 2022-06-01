import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import getInitialState from "../../initialState";
import { JournalEntriesList } from "./JournalEntriesList";
import { getAllJournalEntries, getJournalEntry } from "../../services/JournalService";
import { PlantPage } from "../Plant/PlantPage";
import { getPlant } from "../../services/PlantService";

const initialEntryState = {
    entryId: 0,
    entryTitle: "",
    journalId: 0,
    userId: "",
    plantName: "",
    plantId: "",
    content: "",
    dateCreated: new Date(),
  };

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

export function JournalEntry() {

    const {id, journalId} = useParams();

    console.log(id);
    let [journalEntry, setJournalEntry] = useState(initialEntryState);
    let [plant, setPlant] = useState(initialPlantState);

    useEffect(() => {
      console.log("journalID = " + journalId);
      console.log("get journal /" + id);
      let mounted = true;
      getJournalEntry(journalId, id).then(item => {
          console.log("journal=");
          console.log(item);
          if (mounted) {
              setJournalEntry(item);
              getPlant(item.plantId).then(item => {
                console.log("Plant = ");
                console.log(item);
                setPlant(item);
                console.log("This plant = ");
                console.log(plant);
            });
          }
      });
      return;
    }, []);

    return (
        <div className="journal container">
            <div className="row">
                <div className="col-md-9">
                    <h1>{journalEntry.entryTitle}</h1>
                    <br />
                    <p>{new Date(journalEntry.dateCreated).toLocaleString()}</p>
                    {journalEntry.content}
                </div>
                <div className="col-md-3">
                    <h3>About this plant:</h3>
                    <img src={plant.image} alt={plant.name} className="img-fluid float-left"/>
                    <h4 className="w-64 ml-2">{plant.name}</h4>
                    <p>Species: {plant.species}</p>
                    <p>Date acquired: {new Date(plant.dateAcquired).toLocaleString()}</p>
                    <p>Last time repot: {new Date(plant.lastRepot).toLocaleString()}</p>
                    <p>Last time fertilized: {new Date(plant.lastFertilize).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};
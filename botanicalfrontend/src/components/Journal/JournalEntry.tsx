import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJournalEntry } from "../../services/JournalService";
import { getPlant } from "../../services/PlantService";

const initialEntryState = {
    entryId: 0,
    entryTitle: "",
    journalId: 0,
    userId: "",
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
      let mounted = true;
      getJournalEntry(journalId, id).then(item => {
          if (mounted) {
              setJournalEntry(item);
              getPlant(item.plantId).then(item => {
                setPlant(item);
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
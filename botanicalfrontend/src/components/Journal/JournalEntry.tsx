import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import getInitialState from "../../initialState";
import { JournalEntriesList } from "./JournalEntriesList";
import { getAllJournalEntries, getJournalEntry } from "../../services/JournalService";
import { PlantPage } from "../Plant/PlantPage";

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

export function JournalEntry() {

    const {id, journalId} = useParams();

    console.log(id);
    let [journalEntry, setJournalEntry] = useState(initialEntryState);

    useEffect(() => {
      console.log("journalID = " + journalId);
      console.log("get journal /" + id);
      let mounted = true;
      getJournalEntry(journalId, id).then(item => {
          console.log("journal=");
          console.log(item);
          if (mounted) {
              setJournalEntry(item);
          }
      });
      return;
    }, []);

    return (
        <div className="journal">
            <h1>{journalEntry.entryTitle}</h1>
            <div className="row">
                <div className="col-md-8">
                    <br />
                    {journalEntry.content}
                </div>
            </div>
        </div>
    );
};
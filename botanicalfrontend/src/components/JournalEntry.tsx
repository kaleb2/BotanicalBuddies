import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../types/StateTypes";
import getInitialState from "../initialState";
import { JournalEntriesList } from "./JournalEntriesList";
import { getAllJournalEntries, getJournalEntry } from "../services/JournalService";

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

    let param = useParams().id ?? 0;
    let id = +param;

    console.log(id);
    let [journalEntry, setJournalEntry] = useState(initialEntryState);

    useEffect(() => {
      console.log("get journal 1/" + id);
      let mounted = true;
      getJournalEntry(1, id).then(item => {
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
                <br />
                {journalEntry.content}
            </div>
        </div>
    );
};
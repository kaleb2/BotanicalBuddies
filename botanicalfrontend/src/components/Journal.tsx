import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../types/StateTypes";
import getInitialState from "../initialState";
import { JournalEntriesList } from "./JournalEntriesList";

export function Journal() {

    let param = useParams().id ?? 0;
    let id = +param;

    console.log(id);
    let [listOfEntries, setListOfEntries] = useState<Array<JournalEntryType>>([]);

    useEffect(() => {
        let init = async () => {
          try {
            let initialState = await getInitialState();
            setListOfEntries(initialState.listOfEntries);
          } catch (err) {
            console.log(err);
          }
        }
        init();
      }, [])

    return (
        <div className="journal">
            <p>A list of entries for journal # {id}</p>

            <JournalEntriesList id={id} listOfEntries={listOfEntries}/>
            
            <CreateJournalEntry journalId={id}/>
        </div>
    );
};
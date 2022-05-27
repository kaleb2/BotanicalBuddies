import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../types/StateTypes";
import getInitialState from "../initialState";
import { JournalEntriesList } from "./JournalEntriesList";

export function Journals() {

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
            <p>A list of journals</p>

            <JournalEntriesList listOfEntries={listOfEntries}/>
            
            <CreateJournalEntry/>
        </div>
    );
};
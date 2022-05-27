import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getInitialState from "../initialState";
import { getJournalEntry } from "../services/JournalService";
import { JournalEntry as JournalEntryType} from "../types/StateTypes";

export function JournalEntryPage() {

    const { id } = useParams();

    let [currentEntry, setCurrentEntry] = useState<JournalEntryType>();

    useEffect(() => {
        let init = async () => {
          try {
            let initialState = await getInitialState();
            setCurrentEntry(initialState.currentEntry);
          } catch (err) {
            console.log(err);
          }
        }
        init();
      }, [])

    return (
        <div className="journal-entry">
            <h2>{/*currentEntry.entryTitle*/}</h2>
        </div>
    );
};
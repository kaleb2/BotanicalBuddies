import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import getInitialState from "../../initialState";
import { JournalEntriesList } from "./JournalEntriesList";
import { getAllJournalEntries } from "../../services/JournalService";

export function Journal() {

    let param = useParams().id ?? 0;
    let id = +param;

    console.log(id);
    let [listOfEntries, setListOfEntries] = useState<Array<JournalEntryType>>([]);

    useEffect(() => {
      let mounted = true;
      getAllJournalEntries().then(items => {
          if (mounted) {
              setListOfEntries(items);
          }
      });
      return;
    }, []);

    return (
        <div className="journal">
            <p>A list of entries for journal # {id}</p>

            <JournalEntriesList id={id} listOfEntries={listOfEntries}/>
            
            <div className="accordion" id="accordionJournal">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingJournal">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJournal" aria-expanded="true" aria-controls="collapseJournal">
                      Add a new entry to journal
                    </button>
                  </h2>
                  <div id="collapseJournal" className="accordion-collapse collapse" aria-labelledby="headingJournal" data-bs-parent="#accordionJournal">
                    <div className="accordion-body">
                        <CreateJournalEntry journalId={id}/>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};
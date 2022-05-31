import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import getInitialState from "../../initialState";
import { JournalEntriesList } from "./JournalEntriesList";
import { getAllJournalEntries, getJournalEntries, getJournal } from "../../services/JournalService";
import { getUserIdFromStorage, useAuth } from "../../services/AuthService";
import { journalClient } from "../../services/HttpService";

const initialJournalState = {
  userId: 0,
  journalTitle: "",
  plantId: 0,
};

export function Journal() {

    const savedUserId = getUserIdFromStorage();
    console.log("userID = "+savedUserId);

    let param = useParams().id ?? 0;
    let id = +param;

    console.log(id);
    let [listOfEntries, setListOfEntries] = useState<Array<JournalEntryType>>([]);
    const [journal, setJournal] = useState(initialJournalState);

    useEffect(() => {
      let mounted = true;
      getAllJournalEntries().then(items => {
          if (mounted) {
              setListOfEntries(items);
              getJournal(id).then(item => {
                console.log(item);
                if (mounted) {
                    setJournal(item[0]);
                    console.log(journal);
                    console.log(journal.userId  + "===" + savedUserId)
                    console.log(savedUserId === journal.userId);
                }
            });
          }
      });
      return;
    }, []);

    return (
        <div className="journal container">
            <h1>A list of entries for {journal.journalTitle}</h1>

            <JournalEntriesList id={id} listOfEntries={listOfEntries}/>
            
            { savedUserId === journal.userId  ?
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
              :
                <br/>
              }
        </div>
    );
};
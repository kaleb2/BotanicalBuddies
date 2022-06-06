import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import { JournalEntriesList } from "./JournalEntriesList";
import { getJournal, getJournalEntries } from "../../services/JournalService";
import { getUserIdFromStorage, useAuth } from "../../services/AuthService";

const initialJournalState = {
  userId: 0,
  journalTitle: "",
  plantId: 0,
};

export function Journal() {

    const savedUserId = getUserIdFromStorage();

    let param = useParams().id ?? 0;
    let id = +param;

    const context = useAuth();

    console.log(id);
    let [listOfEntries, setListOfEntries] = useState<Array<JournalEntryType>>([]);
    const [journal, setJournal] = useState(initialJournalState);

    useEffect(() => {
      let mounted = true;
      getJournalEntries(id).then(items => {
          if (mounted) {
              setListOfEntries(items);
              getJournal(id).then(item => {
                if (mounted) {
                    setJournal(item);
                }
            });
          }
      });
      return;
    }, []);

    return (
        <div className="journal container">
            <h1>{journal.journalTitle}</h1>
            <hr/>
            <p>Entries:</p>

            <JournalEntriesList id={id} listOfEntries={listOfEntries}/>
            
            { savedUserId === journal.userId && context?.token ?
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
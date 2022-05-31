import { useEffect, useState } from "react";
import { getJournals } from "../../services/JournalService";
import { JournalsList } from "./JournalsList";
import { Journal as JournalType} from "../../types/StateTypes";

export function AllJournals() {

    let [listOfJournals, setListOfJournals] = useState<Array<JournalType>>([]);

    useEffect(() => {
      let mounted = true;
      getJournals().then(items => {
          if (mounted) {
              setListOfJournals(items);
          }
      });
      return;
    }, []);

    return (
        <div className="journals container">
            <h1>All Journals</h1>
            <JournalsList listOfJournals={listOfJournals}/>
        </div>
    );
};
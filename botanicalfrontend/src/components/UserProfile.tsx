import { useEffect, useState } from "react";
import { getJournals } from "../services/JournalService";
import { JournalsList } from "./Journal/JournalsList";
import { Journal as JournalType} from "../types/StateTypes";

export function UserProfile() {

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
        <div className="profile">
            <p>This is your profile!</p>
            <JournalsList listOfJournals={listOfJournals}/>
        </div>
    );
};
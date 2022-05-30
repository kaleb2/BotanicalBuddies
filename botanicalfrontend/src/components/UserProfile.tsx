import { useEffect, useState } from "react";
import { getJournals } from "../services/JournalService";
import { JournalsList, ProfileJournalsList } from "./Journal/JournalsList";
import { Journal as JournalType} from "../types/StateTypes";
import { User as UserType} from "../types/StateTypes";
import { CreateJournal } from "./Journal/CreateJournal";

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
            <ProfileJournalsList listOfJournals={listOfJournals}/>

            <h1>Create a new journal</h1>
            <CreateJournal />
        </div>
    );
};
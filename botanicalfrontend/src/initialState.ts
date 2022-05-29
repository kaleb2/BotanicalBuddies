import { State } from "./types/StateTypes";
import { getJournalEntry, getJournals } from "./services/JournalService";

async function getInitialState(): Promise<State> {
    return {
        listOfJournals: await getJournals()
  }
}

export default getInitialState;
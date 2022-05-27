import { State } from "./types/StateTypes";
import { getAllJournalEntries, getJournalEntry } from "./services/JournalService";

async function getInitialState(): Promise<State> {
    return {
        currentEntry: await getJournalEntry(1,1),
        listOfEntries: await getAllJournalEntries()
  }
}

export default getInitialState;
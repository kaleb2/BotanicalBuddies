import { State } from "./types/StateTypes";
import { getJournalEntries, getJournalEntry } from "./services/JournalService";

async function getInitialState(): Promise<State> {
    return {
        currentEntry: await getJournalEntry(1,1),
        listOfEntries: await getJournalEntries(1)
  }
}

export default getInitialState;
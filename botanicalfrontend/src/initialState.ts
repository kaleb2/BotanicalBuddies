import { State } from "./types/StateTypes";
import { getJournalEntries, getJournalEntry } from "./services/JournalService";

async function getInitialState(): Promise<State> {
    return {
        currentEntry: await getJournalEntry(1,1),
        listOfEntries: await getJournalEntries(1)
  }
}

export default getInitialState;
//
// export function getRandomProfile(): Profile {
//   const idNum = random(0, 100000000000, false);
//
//   return {
//     imgUri: `http://localhost:8000/doggr/profile1.jpg`,
//     thumbUri: `https://loremflickr.com/75/75/animal?lock=${idNum}`,
//     name: `Doggr${idNum}`,
//     id: idNum,
//   };
// }
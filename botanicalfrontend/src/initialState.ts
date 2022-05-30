import { State } from "./types/StateTypes";
import { getAllPlants, getPlant } from "./services/PlantService";
import { getJournals } from "./services/JournalService";

async function getInitialState(): Promise<State> {
  return {
    listOfJournals: await getJournals(),
    currentProfile: await getPlant(1),
    listOfPlants: await getAllPlants(), // change these to use database random
  }
}

export default getInitialState;

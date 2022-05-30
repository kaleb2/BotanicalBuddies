import { State } from "./types/StateTypes";
import { getPlant, getPlants } from "./services/PlantService";
import { getJournals } from "./services/JournalService";

async function getInitialState(): Promise<State> {
  return {
    listOfJournals: await getJournals(),
    currentProfile: await getPlant(1),
    listOfPlants: await getPlants(1), // change these to use database random
  }
}

export default getInitialState;

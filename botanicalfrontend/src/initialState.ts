import { State } from "./types/StateTypes";
import { getPlants, Plant } from "./services/PlantService";

async function getInitialState(): Promise<State> {
  return {
    listOfPlants: await getPlants(1), // change these to use database random
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

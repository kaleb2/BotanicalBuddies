import { httpClient } from "../services/HttpService";

export const Plant = {
    async create(plant) {
      console.log(plant);
      return httpClient.post("/plants"
        , { name: plant.name, userId: plant.userId, species: plant.species, image: plant.image,
            dateAcquired: plant.dateAcquired, lastRepot: plant.lastRepot,
            lastFertilize: plant.lastFertilize }
      )
      
    },
  }

  export async function getPlants(plantUserId) {
    let res = await httpClient.get("/plants/"+plantUserId);
  
    let data = await res.data;
    console.log(data);
    return data;
  }

  export async function getAllPlants() {
    let res = await httpClient.get("/plants");
  
    let data = await res.data;
    console.log(data);
    return data;
  }

  export async function getPlant(plantId) {
    let res = await httpClient.get("/plant/"+plantId);
  
    let data = await res.data;
    console.log(data);
    return data;
  }
  
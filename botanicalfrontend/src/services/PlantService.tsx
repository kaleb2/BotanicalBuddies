import { httpClient } from "../services/HttpService";

export const Plant = {
    async create(plant) {
      return httpClient.post("/plants"
        , { name: plant.name, userId: plant.userId, species: plant.species, image: plant.image,
            dateAcquired: plant.dateAcquired, lastRepot: plant.lastRepot,
            lastFertilize: plant.lastFertilize }
      )
      
    },
    async get(plantUserId) {
        return httpClient.get("/plants/"+plantUserId)
    }
  }
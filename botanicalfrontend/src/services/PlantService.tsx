import axios from "./HttpService";

export const Plant = {
    async create(plant) {
      return axios.post("/plants"
        , { name: plant.name, userId: plant.userId, species: plant.species, image: plant.image,
            dateAcquired: plant.dateAcquired, lastRepot: plant.lastRepot,
            lastFertilize: plant.lastFertilize }
      )
      
    },
    async get(plantUserId) {
        return axios.get("/plants/"+plantUserId)
    }
  }
import { httpClient } from "../services/HttpService";

export const User = {
    async create(user) {
      return httpClient.post("/users"
        , { email: user.email, password: user.password }
      )
      
    },
    async login(user) {
      return httpClient.post("/login"
        , { email: user.email, password: user.password }
      )
    }/*,
    async get(userId) {
      return axios.get("/users/"+userId)
    }*/
  }
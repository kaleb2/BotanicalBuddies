import axios from "./HttpService";

export const User = {
    async create(user) {
      return axios.post("/users"
        , { email: user.email, password: user.password }
      )
      
    },
    async login(user) {
      return axios.post("/login"
        , { email: user.email, password: user.password }
      )
    }/*,
    async get(userId) {
      return axios.get("/users/"+userId)
    }*/
  }
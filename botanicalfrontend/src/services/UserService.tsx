import { httpClient } from "../services/HttpService";
import { User as UserType } from "../types/StateTypes";

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
    }
  }

  export async function getUser(userId) {
    let res = await httpClient.get("/users/"+userId)

    let data = await res.data;
    console.log(data);
    return data;
  }

  export async function getUsers(): Promise<Array<UserType>> {
    let res = await httpClient.get("/users");

    let data = await res.data;
    console.log(data);
    return data;
  }
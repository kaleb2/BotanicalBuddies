import { httpClient } from "../services/HttpService";

export const Welcome = {

  async getWelcome() {
    await httpClient.get("/welcome").then( (response) => {
      console.log(response.data);
      return response.data;
    });
  }
}
import axios from "./HttpService";

export const Welcome = {

  async getWelcome() {
    await axios.get("/welcome").then( (response) => {
      console.log(response.data);
      return response.data;
    });
  }
}
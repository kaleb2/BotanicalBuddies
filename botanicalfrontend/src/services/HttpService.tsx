import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:9000/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});

export const journalClient = axios.create({
  baseURL: "http://localhost:9200/",
  headers: {
    "Content-type": "application/json"
  }
});

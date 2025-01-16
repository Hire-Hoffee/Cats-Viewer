import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
  },
});

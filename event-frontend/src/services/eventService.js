import axios from "axios";

const BASE_URL = "http://localhost:8082/event";

export const getEvents = () =>
  axios.get(`${BASE_URL}/events`);

export const createEvent = (event) =>
  axios.post(`${BASE_URL}/createEvent`, event);
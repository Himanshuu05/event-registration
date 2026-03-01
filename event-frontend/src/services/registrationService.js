import axios from "axios";

const BASE_URL = "http://localhost:8083/registration";

export const getRegistrations = () =>
  axios.get(`${BASE_URL}/registrations`);

export const createRegistration = (data) =>
  axios.post(`${BASE_URL}/register`, data);
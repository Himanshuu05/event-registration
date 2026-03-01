import axios from "axios";

const BASE_URL = "http://localhost:8081/user";

export const getUsers = () =>
  axios.get(`${BASE_URL}/users`);

export const createUser = (user) =>
  axios.post(`${BASE_URL}/create`, user);

export const getUserById = (id) =>
  axios.get(`${BASE_URL}/${id}`);
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

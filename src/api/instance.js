import * as axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a510e924-6cd3-421d-bf9f-35f0d5f53967",
  },
});

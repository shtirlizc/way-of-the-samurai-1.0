import instance from "./instance";

export default {
  authMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
};

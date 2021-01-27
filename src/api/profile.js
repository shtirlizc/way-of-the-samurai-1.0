import instance from "./instance";

export default {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

import { profileInitialState as initialState } from "../stateConstants";
import { profileAPI } from "../../api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

const profileReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPost,
            likesCount: 0,
          },
        ],
      };

    default:
      return state;
  }
};

export const addPost = (newPost) => ({ type: ADD_POST, newPost });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;

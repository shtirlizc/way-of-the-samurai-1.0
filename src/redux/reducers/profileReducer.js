import { profileInitialState as initialState } from "../stateConstants";
import { profileAPI } from "../../api";

const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const profileReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case CHANGE_POST:
      return {
        ...state,
        currentPost: value,
      };

    case ADD_POST:
      const currentPost = state.currentPost;
      return {
        ...state,
        currentPost: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: currentPost,
            likesCount: 0,
          },
        ],
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const changePost = (value) => ({
  type: CHANGE_POST,
  value,
});
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

export default profileReducer;

import { profileInitialState as initialState } from "../stateConstants";

const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
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

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostActionCreator = (value) => ({
  type: CHANGE_POST,
  value,
});

export default profileReducer;

import { profileInitialState as initialState } from "../stateConstants";

const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case CHANGE_POST: {
      const stateCopy = { ...state };
      stateCopy.currentPost = value;

      return stateCopy;
    }
    case ADD_POST: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push({
        id: 5,
        message: state.currentPost,
        likesCount: 0,
      });
      stateCopy.currentPost = "";

      return stateCopy;
    }
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

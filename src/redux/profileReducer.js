const CHANGE_POST = "CHANGE-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case CHANGE_POST:
      state.currentPost = value;

      return state;
    case ADD_POST:
      this._state.profilePage.posts.push({
        id: 5,
        message: state.currentPost,
        likesCount: 0,
      });
      state.currentPost = "";

      return state;
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

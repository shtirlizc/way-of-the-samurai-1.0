import { usersInitialState as initialState } from "../stateConstants";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const usersReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id !== action.userId
            ? user
            : {
                ...user,
                followed: true,
              };
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id !== action.userId
            ? user
            : {
                ...user,
                followed: false,
              };
        }),
      };

    default:
      return state;
  }
};

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;

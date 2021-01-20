import { usersInitialState as initialState } from "../stateConstants";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_PAGES = "SET-TOTAL-PAGES";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

const usersReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
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

    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalCount: action.totalPages,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
};

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setTotalPagesActionCreator = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  totalPages,
});
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export default usersReducer;

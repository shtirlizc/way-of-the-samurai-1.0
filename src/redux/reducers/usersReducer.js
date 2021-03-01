import { usersInitialState as initialState } from "../stateConstants";
import { followAPI, usersAPI } from "../../api";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_PAGES = "SET-TOTAL-PAGES";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING";

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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        inFollowingProcess: action.isFollowing
          ? [...state.inFollowingProcess, action.userId]
          : state.inFollowingProcess.filter((user) => user !== action.userId),
      };

    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  totalPages,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowing = (isFollowing, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFollowing,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalPages(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));

    followAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(toggleIsFollowing(false, userId));
      }
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));

    followAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
        dispatch(toggleIsFollowing(false, userId));
      }
    });
  };
};

export default usersReducer;

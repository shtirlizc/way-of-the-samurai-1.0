import { authInitialState as initialState } from "../stateConstants";

const SET_AUTH_USER = "SET-AUTH-USER";

const authReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUser = (userId, login, email) => ({
  type: SET_AUTH_USER,
  data: {
    userId,
    login,
    email,
  },
});

export default authReducer;

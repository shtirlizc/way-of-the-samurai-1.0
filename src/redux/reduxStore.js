import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import authReducer from "./reducers/authReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

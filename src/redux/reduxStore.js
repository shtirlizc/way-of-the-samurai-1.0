import { combineReducers, createStore } from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;

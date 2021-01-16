import { connect } from "react-redux";
import Users from "./index";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    const action = setUsersActionCreator(users);
    dispatch(action);
  },
  follow: (userId) => {
    const action = followActionCreator(userId);
    dispatch(action);
  },
  unfollow: (userId) => {
    const action = unfollowActionCreator(userId);
    dispatch(action);
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

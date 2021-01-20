import { connect } from "react-redux";
import Users from "./index";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setTotalPagesActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
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
  setTotalPages: (totalPages) => {
    const action = setTotalPagesActionCreator(totalPages);
    dispatch(action);
  },
  setCurrentPage: (currentPage) => {
    const action = setCurrentPageActionCreator(currentPage);
    dispatch(action);
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

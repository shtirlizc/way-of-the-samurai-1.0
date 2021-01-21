import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setTotalPagesActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
import Users from "./index";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalPages(response.data.totalCount);
      });
  }

  onChangePage = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  onFollow = (userId) => {
    this.props.follow(userId);
  };

  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  };

  render() {
    const { users, currentPage, totalCount, pageSize } = this.props;

    return (
      <Users
        users={users}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onChangePage={this.onChangePage}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

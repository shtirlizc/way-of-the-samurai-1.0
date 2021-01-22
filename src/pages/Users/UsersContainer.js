import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  setUsers,
  follow,
  unfollow,
  setTotalPages,
  setCurrentPage,
  toggleIsFetching,
} from "../../redux/reducers/usersReducer";
import Users from "./index";
import Preloader from "../../components/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage,
      pageSize,
      toggleIsFetching,
      setUsers,
      setTotalPages,
    } = this.props;

    toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalPages(response.data.totalCount);
      });
  }

  onChangePage = (page) => {
    const { pageSize, toggleIsFetching, setCurrentPage, setUsers } = this.props;

    toggleIsFetching(true);
    setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
      )
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
      });
  };

  onFollow = (userId) => {
    this.props.follow(userId);
  };

  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  };

  render() {
    const { users, isFetching, currentPage, totalCount, pageSize } = this.props;

    if (isFetching) {
      return <Preloader />;
    }

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
  isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setTotalPages,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);

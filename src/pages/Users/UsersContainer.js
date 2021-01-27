import React from "react";
import { connect } from "react-redux";

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
import { usersAPI } from "../../api";

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

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
      setTotalPages(data.totalCount);
    });
  }

  onChangePage = (page) => {
    const { pageSize, toggleIsFetching, setCurrentPage, setUsers } = this.props;

    toggleIsFetching(true);
    setCurrentPage(page);

    usersAPI.getUsers(page, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
    });
  };

  render() {
    const {
      users,
      isFetching,
      currentPage,
      totalCount,
      pageSize,
      follow,
      unfollow,
    } = this.props;

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
        follow={follow}
        unfollow={unfollow}
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

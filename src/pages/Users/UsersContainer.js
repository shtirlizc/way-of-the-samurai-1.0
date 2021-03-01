import React from "react";
import { connect } from "react-redux";

import { follow, unfollow, getUsers } from "../../redux/reducers/usersReducer";
import Users from "./index";
import Preloader from "../../components/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize, getUsers } = this.props;

    getUsers(currentPage, pageSize);
  }

  onChangePage = (page) => {
    const { pageSize, getUsers } = this.props;

    getUsers(page, pageSize);
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
      inFollowingProcess,
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
        inFollowingProcess={inFollowingProcess}
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
  inFollowingProcess: state.usersPage.inFollowingProcess,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
})(UsersContainer);

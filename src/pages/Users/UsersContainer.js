import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { follow, unfollow, getUsers } from "../../redux/reducers/usersReducer";
import Users from "./index";
import Preloader from "../../components/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
      isAuth,
    } = this.props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }

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
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);

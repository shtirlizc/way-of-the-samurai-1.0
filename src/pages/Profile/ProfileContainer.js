import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./index";
import {
  addPost,
  changePost,
  getProfile,
} from "../../redux/reducers/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 2;

    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  currentPost: state.profilePage.currentPost,
});

const AuthRedirectProfile = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {
  addPost,
  changePost,
  getProfile,
})(withRouter(AuthRedirectProfile));

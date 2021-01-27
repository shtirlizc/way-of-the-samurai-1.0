import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./index";
import {
  addPost,
  changePost,
  setUserProfile,
} from "../../redux/reducers/profileReducer";
import { profileAPI } from "../../api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 2;

    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
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

export default connect(mapStateToProps, {
  setUserProfile,
  addPost,
  changePost,
})(withRouter(ProfileContainer));

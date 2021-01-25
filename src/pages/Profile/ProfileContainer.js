import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./index";
import {
  addPost,
  changePost,
  setUserProfile,
} from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
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

import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";

import Header from "./index";
import { setAuthUser } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (!response.data.resultCode) {
          const { id, login, email } = response.data.data;

          this.props.setAuthUser(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setAuthUser,
})(HeaderContainer);

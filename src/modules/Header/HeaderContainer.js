import React from "react";
import { connect } from "react-redux";

import Header from "./index";
import { setAuthUser } from "../../redux/reducers/authReducer";
import { authAPI } from "../../api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;

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

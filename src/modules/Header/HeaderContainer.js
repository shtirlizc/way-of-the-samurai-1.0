import React from "react";
import { connect } from "react-redux";

import Header from "./index";
import { authUser } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
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
  authUser,
})(HeaderContainer);

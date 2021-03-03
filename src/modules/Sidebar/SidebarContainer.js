import { connect } from "react-redux";
import Sidebar from "./index";

const mapStateToProps = (state) => {
  return {
    navigation: state.sidebar.navigation,
    friends: state.sidebar.friends,
    isAuth: state.auth.isAuth,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;

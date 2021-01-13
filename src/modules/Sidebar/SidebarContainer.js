import { connect } from "react-redux";
import Sidebar from "./index";

const mapStateToProps = (state) => {
  return {
    navigation: state.sidebar.navigation,
    friends: state.sidebar.friends,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;

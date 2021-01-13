import { connect } from "react-redux";
import DialogsList from "./index";

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
});

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;

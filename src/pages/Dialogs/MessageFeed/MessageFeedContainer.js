import { connect } from "react-redux";
import MessageFeed from "./index";
import { addMessage } from "../../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
});

const MessageFeedContainer = connect(mapStateToProps, {
  addMessage,
})(MessageFeed);

export default MessageFeedContainer;

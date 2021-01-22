import { connect } from "react-redux";
import MessageFeed from "./index";
import {
  addMessage,
  changeMessage,
} from "../../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  newMessage: state.dialogsPage.newMessage,
});

const MessageFeedContainer = connect(mapStateToProps, {
  addMessage,
  changeMessage,
})(MessageFeed);

export default MessageFeedContainer;

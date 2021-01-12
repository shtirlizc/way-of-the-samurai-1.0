import { connect } from "react-redux";
import MessageFeed from "./index";
import {
  addMessageActionCreator,
  changeMessageActionCreator,
} from "../../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  newMessage: state.dialogsPage.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    const action = addMessageActionCreator();
    dispatch(action);
  },
  changeNewMessage: (value) => {
    const action = changeMessageActionCreator(value);
    dispatch(action);
  },
});

const MessageFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFeed);

export default MessageFeedContainer;

import React from "react";
import MessageFeed from "./index";
import {
  addMessageActionCreator,
  changeMessageActionCreator,
} from "../../../redux/reducers/dialogsReducer";
import StoreContext from "../../../StoreContext";

const MessageFeedContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const { dispatch } = store;
        const state = store.getState();
        const { dialogsPage } = state;
        const { messages, newMessage } = dialogsPage;

        const addMessage = () => {
          const action = addMessageActionCreator();
          dispatch(action);
        };

        const changeNewMessage = (value) => {
          const action = changeMessageActionCreator(value);
          dispatch(action);
        };

        return (
          <MessageFeed
            messages={messages}
            newMessage={newMessage}
            addMessage={addMessage}
            changeNewMessage={changeNewMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessageFeedContainer;

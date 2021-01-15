import { dialogsInitialState as initialState } from "../stateConstants";

const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        newMessage: value,
      };

    case ADD_MESSAGE:
      const newMessage = state.newMessage;
      return {
        ...state,
        newMessage: "",
        messages: [
          ...state.messages,
          {
            id: 5,
            message: newMessage,
            isMineMessage: true,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeMessageActionCreator = (value) => ({
  type: CHANGE_MESSAGE,
  value,
});

export default dialogsReducer;

import { dialogsInitialState as initialState } from "../stateConstants";

const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case CHANGE_MESSAGE: {
      const stateCopy = { ...state };
      stateCopy.newMessage = value;

      return stateCopy;
    }
    case ADD_MESSAGE: {
      const stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({
        id: 5,
        message: state.newMessage,
        isMineMessage: true,
      });
      stateCopy.newMessage = "";

      return stateCopy;
    }
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

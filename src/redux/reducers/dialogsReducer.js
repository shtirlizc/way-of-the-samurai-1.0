import { dialogsInitialState as initialState } from "../stateConstants";

const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 5,
            message: action.newMessage,
            isMineMessage: true,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;

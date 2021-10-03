import { actions } from "../store";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case actions["UPDATE_NEW_MESSAGE_BODY"]:
      state.newMessageBody = action.payload;
      return state;
    case actions["SEND_MESSAGE"]:
      const message = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ message, id: 6 });
      return state;
    default:
      return state;
  }
};
export const updateNewMessageBodyActionCreator = (payload) => ({
  type: actions["UPDATE_NEW_MESSAGE_BODY"],
  payload,
});

export const sendMessageActionCreator = () => ({
  type: actions["SEND_MESSAGE"],
});

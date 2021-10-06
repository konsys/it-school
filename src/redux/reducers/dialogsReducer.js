import { actions } from "../actions";

const initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions["UPDATE_NEW_MESSAGE_BODY"]:
      return { ...state, newMessageBody: action.payload };
    case actions["SEND_MESSAGE"]:
      const message = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { message, id: 6 }],
      };
    default:
      return state;
  }
};

export const dialogTextChangeActionCreator = (payload) => ({
  type: actions["UPDATE_NEW_MESSAGE_BODY"],
  payload,
});

export const sendMessageActionCreator = () => ({
  type: actions["SEND_MESSAGE"],
});

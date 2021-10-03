import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props) => {
  const { store } = props;

  const onSendMessage = () => {
    store.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = (value) => {
    store.dispatch(updateNewMessageBodyActionCreator(value));
  };

  return (
    <Dialogs
      onSendMessage={onSendMessage}
      onMessageChange={onMessageChange}
      dialogsPage={store.getState().dialogsPage}
    />
  );
};

import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";

export const DialogsConteiner = (props) => {
  const onSendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    props.dispatch(updateNewMessageBodyActionCreator(e.target.value));
  };

  return (
    <Dialogs sendMessage={onSendMessage} onMessageChange={onNewMessageChange} />
  );
};

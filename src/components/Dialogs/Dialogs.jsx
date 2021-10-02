import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";

const Dialogs = (props) => {
  const dialogsPage = props.store.getState().dialogsPage;

  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  const { newMessageBody } = props.store.getState().dialogsPage;

  const onSendMessage = (e) => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(e.target.value));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder="Enter message"
            value={newMessageBody}
            onChange={onNewMessageChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessage}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

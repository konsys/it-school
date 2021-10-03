import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export const Dialogs = (props) => {
  const { onSendMessage, onMessageChange, dialogsPage } = props;
  const dialogsElements = dialogsPage.dialogs.map((d, key) => (
    <DialogItem name={d.name} id={d.id} key={key} />
  ));
  const messagesElements = dialogsPage.messages.map((m, key) => (
    <Message message={m.message} key={key} />
  ));

  const { newMessageBody } = props.dialogsPage;

  const onSend = () => {
    onSendMessage();
  };

  const onNewMessageChange = (e) => {
    onMessageChange(e.target.value);
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
          />
        </div>
        <div>
          <button onClick={onSend}>Ok</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  let state = props.store.getState();
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  const onMessageChangeContainer = text => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      addMessageContainer={addMessage}
      onMessageChangeContainer={onMessageChangeContainer}
      messagesPage={state.messagesPage}
    />
  );
};

export default DialogsContainer;

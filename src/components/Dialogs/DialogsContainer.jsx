import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/DialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        const onMessageChangeContainer = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            addMessageContainer={addMessage}
            onMessageChangeContainer={onMessageChangeContainer}
            messagesPage={state.messagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

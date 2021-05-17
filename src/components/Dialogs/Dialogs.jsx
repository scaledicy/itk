import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  inputMessage: {
    flexGrow: 1,
    marginRight: 30,
  },
  addMessage: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const Dialogs = props => {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const createMessage = () => {
    return alert(message);
  };

  let messagesContacts = props.messagesPage.dialogs.map(el => (
    <DialogItem key={el.id} id={el.id} name={el.name} />
  ));
  let messages = props.messagesPage.messages.map(el => (
    <Message key={el.id} id={el.id} message={el.message} />
  ));
  return (
    <>
      <div className={s.dialogsContainer}>
        <h1 className={s.dialogsTitle}>Messages</h1>
        <div className={s.dialogs}>
          <ul className={s.dialogsContacts}>{messagesContacts}</ul>
          <div className={s.dialogsChatContainer}>
            <ul className={s.dialogsChat}>{messages}</ul>
            <div className={s.messageForm}>
              <TextField
                className={classes.inputMessage}
                id='standard-basic'
                label='Input message...'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <Button
                className={classes.addMessage}
                variant='contained'
                color='primary'
                onClick={createMessage}
              >
                Add post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

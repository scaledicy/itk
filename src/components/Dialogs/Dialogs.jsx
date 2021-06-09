import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
    inputMessage: {
        flexGrow: 1,
        marginRight: 30,
        resize: "none",
        borderRadius: 10,
        padding: 8,
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
    const newMessageEl = React.createRef();

    let messagesContacts = props.messagesPage.dialogs.map(el => (
        <DialogItem key={el.id} id={el.id} name={el.name} />
    ));
    let messages = props.messagesPage.messages.map(el => (
        <Message key={el.id} id={el.id} message={el.message} />
    ));

    const onMessageChange = () => {
        let text = newMessageEl.current.value;
        props.onMessageChange(text);
    };

    if (!props.isAuth) return <Redirect to='/login' />;

    return (
        <>
            <div className={s.dialogsContainer}>
                <h1 className={s.dialogsTitle}>Messages</h1>
                <div className={s.dialogs}>
                    <ul className={s.dialogsContacts}>{messagesContacts}</ul>
                    <div className={s.dialogsChatContainer}>
                        <ul className={s.dialogsChat}>{messages}</ul>
                        <div className={s.messageForm}>
                            <textarea
                                ref={newMessageEl}
                                className={classes.inputMessage}
                                value={props.messagesPage.newMessageText}
                                onChange={onMessageChange}
                            />
                            <Button
                                className={classes.addMessage}
                                variant='contained'
                                color='primary'
                                onClick={props.addMessage}
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

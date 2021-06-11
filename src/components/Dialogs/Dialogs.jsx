import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useFormik } from "formik";

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

const AddMessageForm = props => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            addMessage: "",
        },
        onSubmit: values => {
            props.addMessage(values.addMessage);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.messageForm}>
            <textarea
                id='inputMessage'
                name='addMessage'
                onChange={formik.handleChange}
                value={formik.values.message}
                className={classes.inputMessage}
            />
            <Button
                variant='contained'
                color='primary'
                type='submit'
                className={classes.addMessage}
            >
                Add post
            </Button>
        </form>
    );
};

const Dialogs = props => {
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
                        <AddMessageForm addMessage={props.addMessage} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dialogs;

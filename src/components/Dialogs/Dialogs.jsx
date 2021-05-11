import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  return (
    <>
      <div className={s.dialogsContainer}>
        <h1 className={s.dialogsTitle}>Messages</h1>
        <div className={s.dialogs}>
          <ul className={s.dialogsContacts}>
            {props.messagesPage.dialogs.map(el => (
              <DialogItem key={el.id} id={el.id} name={el.name} />
            ))}
          </ul>
          <div className={s.dialogsChatContainer}>
            <ul className={s.dialogsChat}>
              {props.messagesPage.messages.map(el => (
                <Message key={el.id} id={el.id} message={el.message} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

import { connect } from "react-redux";
import { addMessage, onMessageChange } from "redux/DialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = state => {
    return {
        messagesPage: state.messagesPage,
    };
};

const mapDispatchToProps = {
    addMessage,
    onMessageChange,
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

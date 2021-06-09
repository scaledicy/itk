import { connect } from "react-redux";
import { addMessage, onMessageChange } from "redux/DialogsReducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";

const mapStateToProps = state => {
    return {
        messagesPage: state.messagesPage,
    };
};

const mapDispatchToProps = {
    addMessage,
    onMessageChange,
};

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;

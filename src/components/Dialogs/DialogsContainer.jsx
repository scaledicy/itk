import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessageContainer: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChangeContainer: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

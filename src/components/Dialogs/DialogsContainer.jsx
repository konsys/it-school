import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  dialogTextChangeActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
  // debugger;
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(dialogTextChangeActionCreator(text));
    },
    onSendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

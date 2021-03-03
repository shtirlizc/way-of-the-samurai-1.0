import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Title from "../../components/Title";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessageFeedContainer from "./MessageFeed/MessageFeedContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Title>Dialogs</Title>

      <div className={s.root}>
        <DialogsListContainer />
        <MessageFeedContainer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const AuthRedirectDialogs = withAuthRedirect(Dialogs);

export default connect(mapStateToProps)(AuthRedirectDialogs);

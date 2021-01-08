import React from "react";
import StoreContext from "../../../StoreContext";
import ProfileInfo from "./index";

const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { profilePage } = state;
        const { info } = profilePage;

        return <ProfileInfo info={info} />;
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileInfoContainer;

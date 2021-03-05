import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: "",
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  onChangeStatus = (evt) => {
    this.setState({
      status: evt.target.value,
    });
  };

  render() {
    const { editMode, status } = this.state;
    const statusMessage = status || "Можете указать свой статус";

    return (
      <>
        {editMode ? (
          <input
            className={s.statusField}
            autoFocus
            type="text"
            value={status}
            onChange={this.onChangeStatus}
            onBlur={this.deactiveEditMode}
          />
        ) : (
          <p className={s.statusText} onDoubleClick={this.activeEditMode}>
            {statusMessage}
          </p>
        )}
      </>
    );
  }
}

export default ProfileStatus;

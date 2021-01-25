import React from "react";
import Preloader from "../../../components/Preloader";

import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  const { profile } = props;

  if (!profile) {
    return <Preloader />;
  }

  const {
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
    photos,
  } = profile;

  const profileList = Object.entries(contacts).filter((item) => {
    return item[1];
  });

  const makeLink = (id) => {
    return (
      <a href={`https://${id}`} target="_blank" rel="noreferrer">
        {id}
      </a>
    );
  };

  return (
    <>
      <div className={s.profile}>
        <div className={s.profileHead}>
          {photos.large && (
            <div className={s.profileAvatar}>
              <img src={photos.large} alt={fullName} />
            </div>
          )}

          <div className={s.profileMore}>
            {lookingForAJob && (
              <>
                <p className={s.lookForAJob}>Ищу работу</p>
                <p className={s.lookForAJobDesc}>{lookingForAJobDescription}</p>
              </>
            )}
          </div>
        </div>

        <div className={s.profileDesc}>
          <h3 className={s.profileName}>{fullName}</h3>
          <dl className={s.profileList}>
            {profileList.map(([title, value], idx) => (
              <React.Fragment key={idx}>
                <dt>{title}</dt>
                <dd>{makeLink(value)}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;

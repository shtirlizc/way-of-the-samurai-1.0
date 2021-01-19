import React from "react";
import * as axios from "axios";
import Title from "../../components/Title";
import Button from "../../components/Button";
import DefaultUserImage from "../../assets/images/user.png";
import s from "./Users.module.css";

const Users = (props) => {
  const { users, setUsers, follow, unfollow } = props;

  if (!users.length) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        setUsers(response.data.items);
      });
  }

  const onFollow = (userId) => {
    follow(userId);
  };

  const onUnfollow = (userId) => {
    unfollow(userId);
  };

  return (
    <div className={s.root}>
      <Title>Users</Title>

      {users.map(({ id, name, photos, status, followed }) => {
        const userImage = photos.small ? photos.small : DefaultUserImage;

        return (
          <div key={id} className={s.user}>
            <div className={s.userAvatar}>
              <div className={s.userImg}>
                <img src={userImage} alt={name} />
              </div>
              <div className={s.userFollow}>
                {followed ? (
                  <Button
                    onClick={() => {
                      onUnfollow(id);
                    }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      onFollow(id);
                    }}
                  >
                    Follow
                  </Button>
                )}
              </div>
            </div>
            <div className={s.userBody}>
              <div className={s.userInfo}>
                <h3 className={s.userName}>{name}</h3>
                {status && <p className={s.userStatus}>{status}</p>}
              </div>
              <div className={s.userLocation}>
                <p>{"location.city"}</p>
                <p>{"location.country"}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className={s.showMore}>
        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default Users;

import React from "react";
import { Link } from "react-router-dom";
import * as axios from "axios";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";

import DefaultUserImage from "../../assets/images/user.png";
import s from "./Users.module.css";

const Users = (props) => {
  const {
    users,
    currentPage,
    totalCount,
    pageSize,
    onChangePage,
    follow,
    unfollow,
  } = props;

  const onFollow = (userId) => {
    follow(userId);
  };

  const onUnfollow = (userId) => {
    unfollow(userId);
  };

  const showPagination = () => (
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      pageSize={pageSize}
      onChangePage={onChangePage}
    />
  );

  return (
    <div className={s.root}>
      <Title>Users</Title>

      <div className={s.paginationTop}>{showPagination()}</div>

      {users.map(({ id, name, photos, status, followed }) => {
        const userImage = photos.small ? photos.small : DefaultUserImage;

        return (
          <div key={id} className={s.user}>
            <div className={s.userAvatar}>
              <Link to={`/profile/${id}`} className={s.userImg}>
                <img src={userImage} alt={name} />
              </Link>
              <div className={s.userFollow}>
                {followed ? (
                  <Button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "a510e924-6cd3-421d-bf9f-35f0d5f53967",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            onUnfollow(id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                          null,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "a510e924-6cd3-421d-bf9f-35f0d5f53967",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            onFollow(id);
                          }
                        });
                    }}
                  >
                    Follow
                  </Button>
                )}
              </div>
            </div>
            <Link to={`/profile/${id}`} className={s.userBody}>
              <div className={s.userInfo}>
                <h3 className={s.userName}>{name}</h3>
                {status && <p className={s.userStatus}>{status}</p>}
              </div>
              <div className={s.userLocation}>
                <p>{"location.city"}</p>
                <p>{"location.country"}</p>
              </div>
            </Link>
          </div>
        );
      })}

      <div className={s.paginationBottom}>{showPagination()}</div>

      {/*<div className={s.showMore}>
          <Button>Show more</Button>
        </div>*/}
    </div>
  );
};

export default Users;

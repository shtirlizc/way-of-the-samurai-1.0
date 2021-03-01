import React from "react";
import { Link } from "react-router-dom";

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
    inFollowingProcess,
  } = props;

  const isFollowingProcess = (id) => {
    return inFollowingProcess.some((userId) => userId === id);
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
                    disabled={isFollowingProcess(id)}
                    onClick={() => {
                      unfollow(id);
                    }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    disabled={isFollowingProcess(id)}
                    onClick={() => {
                      follow(id);
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

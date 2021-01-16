import React from "react";

import s from "./Users.module.css";

const usersList = [
  {
    id: 1,
    firstName: "Lilya",
    lastName: "M.",
    photoUrl:
      "https://sun7-8.userapi.com/impg/wW1hjmJFVNFEZpLYwcwiKcGLpHB9tCF0wn2Fmw/-0FZtDc20MI.jpg?size=100x0&quality=96&crop=0,399,1439,1439&sign=426301f8ede0a53b9146b68e45a9ce78&ava=1",
    status: "I am a boss",
    location: {
      city: "Ufa",
      country: "Russia",
    },
    followed: true,
  },
  {
    id: 2,
    firstName: "Andrew",
    lastName: "M.",
    photoUrl:
      "https://sun7-7.userapi.com/impf/c845216/v845216482/20d52f/CIuASXBUMRI.jpg?size=100x0&quality=96&crop=213,419,433,433&sign=bed62e3c9dc729f88589dc1334e59dd8&ava=1",
    status: "I am a coder",
    location: {
      city: "Ufa",
      country: "Russia",
    },
    followed: true,
  },
  {
    id: 3,
    firstName: "Dmitry",
    lastName: "Ch.",
    photoUrl:
      "https://sun7-9.userapi.com/impf/c638820/v638820576/5eacd/-amRnb2TPCc.jpg?size=100x0&quality=96&crop=144,144,1152,1152&sign=afa75f409958fe9a011fd6e31eaeefab&ava=1",
    status: "I am a designer",
    location: {
      city: "Ufa",
      country: "Russia",
    },
    followed: true,
  },
  {
    id: 4,
    firstName: "Adel",
    lastName: "",
    photoUrl:
      "https://sun7-9.userapi.com/impg/c857216/v857216561/1e86ac/Sv74Lpl4hLQ.jpg?size=100x0&quality=96&crop=236,667,1366,1366&sign=0e010f65bba467c28c71cb77fd41f315&ava=1",
    status: "I am a teacher",
    location: {
      city: "Ufa",
      country: "Russia",
    },
    followed: false,
  },
  {
    id: 5,
    firstName: "Felix",
    lastName: "S.",
    photoUrl:
      "https://sun7-6.userapi.com/impf/c858416/v858416258/3f72f/siBznRf04eU.jpg?size=100x0&quality=96&crop=87,1,579,579&sign=f797a8dcb9ff9e150c88ee45c276a1b0&ava=1",
    status: "I am a philosopher",
    location: {
      city: "Ufa",
      country: "Russia",
    },
    followed: false,
  },
  {
    id: 6,
    firstName: "Angelina",
    lastName: "S.",
    photoUrl:
      "https://sun7-6.userapi.com/impf/c846218/v846218977/737d4/55bdSrtV-cc.jpg?size=100x0&quality=96&crop=115,372,1173,1173&sign=91e6761cc17b62d04b1f1e506cc90e46&ava=1",
    status: "I am a friend",
    location: {
      city: "Miscow",
      country: "Russia",
    },
    followed: false,
  },
];

const Users = (props) => {
  const { users, setUsers, follow, unfollow } = props;

  if (!users.length) {
    setUsers(usersList);
  }

  const onFollow = (userId) => {
    follow(userId);
  };

  const onUnfollow = (userId) => {
    unfollow(userId);
  };

  return (
    <div className={s.root}>
      {users.map(
        ({ id, firstName, lastName, photoUrl, status, location, followed }) => (
          <div key={id} style={{ display: "flex" }}>
            <div>
              <div>
                <img src={photoUrl} alt="" />
              </div>
              <div>
                {followed ? (
                  <button
                    onClick={() => {
                      onUnfollow(id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onFollow(id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  {firstName} {lastName}
                </p>
                <p>{status}</p>
              </div>
              <div>
                <p>{location.city}</p>
                <p>{location.country}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Users;

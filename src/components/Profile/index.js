import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const posts = [
  {
    id: 1,
    message: "Hi, how are you?",
    likesCount: 12,
  },
  {
    id: 2,
    message: "Yo yo yo",
    likesCount: 1024,
  },
  {
    id: 3,
    message: "Yo",
    likesCount: 111,
  },
  {
    id: 4,
    message: "It's, my first post",
    likesCount: 11,
  },
];

const Index = () => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Index;

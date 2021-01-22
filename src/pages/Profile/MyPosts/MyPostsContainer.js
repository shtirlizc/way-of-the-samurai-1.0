import { connect } from "react-redux";
import MyPosts from "./index";
import { addPost, changePost } from "../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  currentPost: state.profilePage.currentPost,
});

const MyPostsContainer = connect(mapStateToProps, { addPost, changePost })(
  MyPosts
);

export default MyPostsContainer;

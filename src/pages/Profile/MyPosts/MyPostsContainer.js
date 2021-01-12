import { connect } from "react-redux";
import MyPosts from "./index";
import {
  addPostActionCreator,
  changePostActionCreator,
} from "../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  currentPost: state.profilePage.currentPost,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    const action = addPostActionCreator();
    dispatch(action);
  },
  changePost: (value) => {
    const action = changePostActionCreator(value);
    dispatch(action);
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

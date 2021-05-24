import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let state = props.store.getState();

  const onPostChange = text => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

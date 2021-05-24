import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/ProfileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = text => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

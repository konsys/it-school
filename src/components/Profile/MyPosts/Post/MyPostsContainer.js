import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/reducers/profileReducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = (props) => {
  const { store } = props;
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      posts={store.getState().profilePage.posts}
      newPostText={store.getState().profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

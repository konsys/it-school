import React from "react";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  const postsElements = props.posts.map((p, key) => (
    <Post message={p.message} key={key} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onUpdatePost = () => {
    props.updateNewPostText(newPostElement.current.value);
  };
  debugger;
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onUpdatePost}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

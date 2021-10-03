import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

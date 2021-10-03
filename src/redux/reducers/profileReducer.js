import { actions } from "../store";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case actions["ADD_POST"]:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case actions["UPDATE_NEW_POST_TEXT"]:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: actions["ADD_POST"],
});

export const updateNewPostTextActionCreator = (payload) => ({
  type: actions["UPDATE_NEW_POST_TEXT"],
  payload,
});

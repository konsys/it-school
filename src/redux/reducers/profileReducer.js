import { actions } from "../store";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  newPostText: "it-kamasutra.com",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions["ADD_POST"]:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, newPostText: "", posts: [...state.posts, newPost] };
    case actions["UPDATE_NEW_POST_TEXT"]:
      return { ...state, newPostText: action.payload };
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

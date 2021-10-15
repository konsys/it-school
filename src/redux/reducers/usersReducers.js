import { actions } from "../actions";

export const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actions["FOLLOW"]:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u
        ),
      };
    case actions["UN_FOLLOW"]:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u
        ),
      };
    case actions["SET_USERS"]:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};

export const followActionCreator = (payload) => {
  return { type: actions["FOLLOW"], payload };
};

export const unfollowActionCreator = (payload) => {
  return { type: actions["UN_FOLLOW"], payload };
};

export const setUsersActionCreator = (payload) => {
  return { type: actions["SET_USERS"], payload };
};

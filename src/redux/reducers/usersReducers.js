import { actions } from "../store";

const initialState = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Dmitry" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Sergey" },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions["ALL_USERS"]:
      return { ...state, users: [], user: {} };
    case actions["ONE_USER"]:
      return { ...state, user: initialState[0], users: [] };
    default:
      return state;
  }
};

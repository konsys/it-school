import { actions } from "../actions";

export const initialUsers = [
  {
    id: 1,
    fullName: "Ivan",
    status: "Free",
    followed: false,
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTgi2urvIo5upKg12D_DTovMiC94heiBBUIP51sXdc=s900-c-k-c0x00ffffff-no-rj",
    location: { country: "Russia", city: "Minsk" },
  },
  {
    id: 2,
    fullName: "Dmitry",
    status: "Free",
    followed: false,
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTgi2urvIo5upKg12D_DTovMiC94heiBBUIP51sXdc=s900-c-k-c0x00ffffff-no-rj",
    location: { country: "Russia", city: "Minsk" },
  },
  {
    id: 3,
    fullName: "Sasha",
    status: "Free",
    followed: false,
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTgi2urvIo5upKg12D_DTovMiC94heiBBUIP51sXdc=s900-c-k-c0x00ffffff-no-rj",
    location: { country: "Russia", city: "Minsk" },
  },
  {
    id: 4,
    fullName: "Sergey",
    status: "Free",
    followed: false,
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTgi2urvIo5upKg12D_DTovMiC94heiBBUIP51sXdc=s900-c-k-c0x00ffffff-no-rj",
    location: { country: "Russia", city: "Minsk" },
  },
];

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

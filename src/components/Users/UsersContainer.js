import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
} from "../../redux/reducers/usersReducers";
import { Users } from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followActionCreator(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowActionCreator(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersActionCreator(users));
  },
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

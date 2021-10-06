import s from "./users.module.css";
import { useEffect } from "react";
import { initialUsers } from "../../redux/reducers/usersReducers";

export const Users = (props) => {
  const { users, follow, unfollow } = props;

  useEffect(() => {
    if (!users.length) {
      props.setUsers(initialUsers);
    }
  }, [props, users.length]);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.avatar} alt={u.fullName} className={s.avatar} />
          </div>
          <div>{u.fullName}</div>
          <div>{u.followed}</div>
          <div>{u.status}</div>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
          <div>
            <button
              onClick={!u.followed ? () => follow(u.id) : () => unfollow(u.id)}
            >
              {!u.followed ? "follow" : "unfollow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

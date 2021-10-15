import s from "./users.module.css";
import { useEffect } from "react";
import axios from "axios";

export const Users = (props) => {
  const { users, follow, unfollow } = props;

  const getUsers = () => {
    // if (!users.length) {
    axios
      .get("http://localhost:8000/users")
      .then((res) => props.setUsers(res.data.items));
    // }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <button children="getUsers" onClick={getUsers} />
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

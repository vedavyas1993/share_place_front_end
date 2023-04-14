import React from "react";
import styles from "./index.module.css";
import UsersItem from "../UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <ul className={styles["users-list"]}>
      {props.items.map((user) => {
        console.log(user);
        return (
          <UsersItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
}

export default UsersList;

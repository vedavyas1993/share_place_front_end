import React from "react";

import UsersItem from "../UserItem";
import Card from "../../../shared/components/UIElements/Card";

import styles from "./index.module.css";

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
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

import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import Avatar from "../../../shared/components/UIElements/Avatar";

import styles from "./index.module.css";
function UsersItem(props) {
  return (
    <li className={styles["user-item"]}>
      <Card className={styles["user-item__content"]}>
        <Link to={`/${props.id}/places`}>
          <div className={styles["user-item__image"]}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className={styles["user-item__info"]}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UsersItem;

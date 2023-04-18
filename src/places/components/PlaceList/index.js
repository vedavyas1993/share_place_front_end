import React from "react";

import Card from "../../../shared/components/UIElements/Card";
import PlaceItem from "../PlaceItem";
import styles from "./index.module.css";
function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className={`${styles["place-list"]} center`}>
        <Card>
          <h2>No places found. maybe create one?</h2>
          <button>Share place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles["place-list"]}>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;

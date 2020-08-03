import React from "react";
import Card from "../shared/Card";
import "../style/UserPlacesList.css";
import { UserPlacesItem } from "./UserPlacesItem";
import Button from "../shared/Button";

export const UserPlacesList = (props) => {
  return props.items.length === 0 ? (
    <div className="place-list center">
      <Card>
        <h2>No places found. Maybe create one?</h2>
        <Button to="/places/new">Share Place</Button>
      </Card>
    </div>
  ) : (
    <ul className="place-list">
      {props.items.map((place) => (
        <UserPlacesItem
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
};

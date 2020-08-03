import React from "react";
import { UsersItem } from "./UsersItem";
import Card from "../shared/Card";
import "../style/UsersList.css";

export const UsersList = (props) => {
  return props.items.length === 0 ? (
    <div className="center">
      <Card>
        <h2>No users found.</h2>
      </Card>
    </div>
  ) : (
    <ul className="users-list">
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

import React from "react";
import { UsersList } from "./UsersList";

export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

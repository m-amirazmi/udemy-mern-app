import React from "react";
import "../style/UserPlaces.css";
import { UserPlacesList } from "./UserPlacesList";
import { useParams } from "react-router-dom";

const PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous building in the USA",
    imageUrl:
      "https://images.unsplash.com/photo-1583842761829-4245d7894246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp State Building",
    description: "One of the most famous building in the USA",
    imageUrl:
      "https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

export const UserPlaces = (props) => {
  const userId = useParams().uid;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);
  return <UserPlacesList items={loadedPlaces} />;
};

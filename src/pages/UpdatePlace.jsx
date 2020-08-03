import React, { useEffect } from "react";
import "../style/NewPlace.css";
import { useParams } from "react-router-dom";
import { Input } from "../shared/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../utils/validators";
import { useForm } from "../hooks/form-hook";
import Button from "../shared/Button";

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

export const UpdatePlace = () => {
  const placeId = useParams().pid;

  const [formState, input, setFormData] = useForm(
    {
      title: {
        value: "",
        valid: false,
      },
      description: {
        value: "",
        valid: false,
      },
    },
    false
  );

  const findPlace = PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (findPlace) {
      setFormData(
        {
          title: {
            value: findPlace.title,
            valid: true,
          },
          description: {
            value: findPlace.description,
            valid: true,
          },
        },
        true
      );
    }
  }, [setFormData, findPlace]);

  const placeUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!findPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
      <form className="place-form" onSubmit={placeUpdateSubmit}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errText="Please enter a valid title."
          onInput={input}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.valid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errText="Please enter a valid description."
          onInput={input}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.valid}
        />
        <Button type="submit" disabled={!formState.valid}>
          UPDATE PLACE
        </Button>
      </form>
    )
  );
};

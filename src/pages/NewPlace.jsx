import React from "react";
import { Input } from "../shared/Input";
import Button from "../shared/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../utils/validators";
import { useForm } from "../hooks/form-hook";
import "../style/NewPlace.css";

export const NewPlace = (props) => {
  const [formState, input] = useForm(
    {
      title: {
        value: "",
        valid: false,
      },
      description: {
        value: "",
        valid: false,
      },
      address: {
        value: "",
        valid: false,
      },
    },
    false
  );

  const placeSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs); // send this to backend
  };

  return (
    <form className="place-form" onSubmit={placeSubmit}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errText="Please enter a valid title."
        onInput={input}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errText="Please enter a valid description atleast 5 characters."
        onInput={input}
      />
      <Input
        id="address"
        label="Address"
        element="input"
        validators={[VALIDATOR_REQUIRE]}
        errText="Please enter a valid address."
        onInput={input}
      />
      <Button type="submit" disabled={!formState.valid}>
        ADD PLACE
      </Button>
    </form>
  );
};

import React, { useState, useContext } from "react";
import "../style/Auth.css";
import Card from "../shared/Card";
import { Input } from "../shared/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validators";
import { useForm } from "../hooks/form-hook";
import Button from "../shared/Button";
import { AuthContext } from "../context/auth-context";

export const Auth = () => {
  const auth = useContext(AuthContext);
  const [authMode, setAuthMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    },
    false
  );

  const authSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  const switchMode = () => {
    if (!authMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.valid && formState.inputs.password.valid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            valid: false,
          },
        },
        false
      );
    }
    setAuthMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmit}>
        {!authMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errText="Please enter a valid password address"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.valid}>
          {authMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchMode}>
        SWITCH TO {authMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

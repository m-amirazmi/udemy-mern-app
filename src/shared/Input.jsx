import React, { useReducer, useEffect } from "react";
import { validate } from "../utils/validators";
import "../style/Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        valid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        touch: true,
      };
    default:
      return state;
  }
};

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    valid: props.valid || false,
    touch: false,
  });

  const { id, onInput } = props;
  const { value, valid } = inputState;

  useEffect(() => {
    onInput(id, value, valid);
  }, [id, onInput, value, valid]);

  const change = (e) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: props.validators,
    });
  };

  const touch = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={change}
        onBlur={touch}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={change}
        onBlur={touch}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.valid && inputState.touch && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.valid && inputState.touch && <p>{props.errText}</p>}
    </div>
  );
};

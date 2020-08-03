import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formValid = true;
      for (const input in state.inputs) {
        if (!state.inputs[input]) {
          continue;
        }
        if (input === action.input) {
          formValid = formValid && action.valid;
        } else {
          formValid = formValid && state.inputs[input].valid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.input]: { value: action.value, valid: action.valid },
        },
        valid: formValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        valid: action.formValid,
      };
    default:
      return state;
  }
};

export const useForm = (initInputs, initFormValid) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    valid: initFormValid,
  });

  const input = useCallback((id, value, valid) => {
    dispatch({ type: "INPUT_CHANGE", value: value, valid: valid, input: id });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formValid: formValidity,
    });
  }, []);

  return [formState, input, setFormData];
};

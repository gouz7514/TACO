import { useReducer } from "react"

type State = {
  value: string
  isTouched: boolean
}

type Action = { type: "INPUT"; value: string } | { type: "BLUR" } | { type: "RESET" }

const initialState: State = {
  value: "",
  isTouched: false,
}

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched }
    case "BLUR":
      return { value: state.value, isTouched: true }
    case "RESET":
      return initialState
    default:
      return initialState
  }
}

const useInput = (validator : (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState)
  const isValid = validator(inputState.value)
  const isError = !isValid && inputState.isTouched

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value })
  }

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }

  return {
    value: inputState.value,
    isValid,
    isError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput
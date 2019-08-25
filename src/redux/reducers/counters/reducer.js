import {
  ADD_COUNT,
  RESET_COUNT
} from "./actionTypes"

const initState = {
  countClick: 0
}

export default function (state = initState, { type, payload }) {
  switch (type) {
    case ADD_COUNT: {
      return {
        ...state,
        countClick: state.countClick + payload
      }
    }

    case RESET_COUNT: {
      return {
        ...state,
        countClick: 0
      }
    }

    default: return state
  }
}
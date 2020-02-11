import {
  ADD_COUNT,
  RESET_COUNT
} from "./actionTypes"

const initState = {
  countClick: 0,
  countType: {
    value: 'string'
  },
  users: [
    {
      name: 'A',
      status: 'BLOCKED'
    },
    {
      name: 'B',
      status: 'ACTIVE'
    }
  ],
  userStatus: 'ACTIVE'
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

    case 'TANG_LEN_SO_3': {
      return {
        ...state,
        countClick: 3
      }
    }

    case 'CHANGE_COUNT_TYPE': {
      return {
        ...state,
        countType: {
          value: 'string'
        }
      }
    }

    default: return state
  }
}
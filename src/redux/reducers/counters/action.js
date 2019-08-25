import { ADD_COUNT, RESET_COUNT } from "./actionTypes"

export const addCounter = (num = 1) => ({
  type: ADD_COUNT,
  payload: num
})

export const resetCounter = () => ({
  type: RESET_COUNT,
})
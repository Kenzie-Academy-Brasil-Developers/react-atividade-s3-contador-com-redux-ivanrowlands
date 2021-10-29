import { ADD_COUNT, REDUCE_COUNT } from "./actionTypes"

export const plus = (count) => ({
    type: ADD_COUNT,
    count: count,
})

export const minus = (count) => ({
    type: REDUCE_COUNT,
    count: count,
})
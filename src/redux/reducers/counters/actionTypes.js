import { prefixAction } from 'redux/actions/utils'

const prefix = prefixAction('counters');

export const ADD_COUNT = prefix('ADD_COUNT')
export const RESET_COUNT = prefix('RESET_COUNT')
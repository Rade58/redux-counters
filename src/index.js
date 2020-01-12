import {render} from 'react-dom'
import React from 'react'

import {createStore, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
///////////////////////////////////////////////////////////////

// COUNTER

import Counter from './Counter'

//////////////////////////////////////////////////////////////
// ACTIONS

const INCREMENT_FIRST = "INCREMENT_FIRST"
const DECREMENT_FIRST = "DECREMENT_FIRST"
const RESET_FIRST = "RESET_FIRST"

const INCREMENT_SECOND = "INCREMENT_SECOND"
const DECREMENT_SECOND = "DECREMENT_SECOND"
const RESET_SECOND = "RESET_SECOND"

// initial STATE

const initialState = {
  one: {
    count: 0
  },
  two: {
    count: 10
  }
}

render(
  <Counter increment="1" decrement="2" reset="3" count="4" />,
  document.getElementById('root')
)


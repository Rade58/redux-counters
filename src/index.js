import {render} from 'react-dom'
import React from 'react'

import {createStore, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
///////////////////////////////////////////////////////////////

// COUNTER COMPONENT

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
    count: 2
  },
  two: {
    count: 10
  }
}

// // //  //  //  //  //  //  //  //  //  //  
    // // //  //  //  //  //  //  //  //  //  //  
// REDUCERS
// RESPONSIBLE FOR FORMING STATE INSIDE STORE
// INTERCEPTING ACTIONS AND FORMING STATE IN RELATION TO ACTION

const reducer_one = (statePartOne = initialState.one, {type}) => {        // SECOND ARGUMENT IS action OBJECT
                                                                            // BUT I DECIDED TO RESTRUCTURE HIM
  
  if(type === INCREMENT_FIRST) {
    // NEW **PART** OF THE STATE IS       IF EXISTED WOULD BE BROUGHT ON    action.payload 
    // BUT I NTHIS EXAMPLE IT DOESN'T EXIST 

    return {count: statePartOne.count + 1}
  }

  if(type === DECREMENT_FIRST) {
    return {count: statePartOne.count - 1}
  }
  
  if(type === RESET_FIRST) {
    return {count: initialState.one.count}
  }


  return statePartOne

}


// SAME STUFF LIKE ABOVE, JUST DIFFERENT ACTIONS, AND DIFFERENT PART OF THE 'COMPLETE' STATE


const reducer_two = (statePartTwo = initialState.two, {type}) => {
  
  if(type === INCREMENT_SECOND) {

    return {count: statePartTwo.count + 1}
  }

  if(type === DECREMENT_SECOND) {
    return {count: statePartTwo.count - 1}
  }
  
  if(type === RESET_SECOND) {
    return {count: initialState.two.count}
  }

  return statePartTwo
}

// combineReducers    RESPONSIBLE TO CREATE NEW FUNCTION THAT SPITS OUT OBJECT COMPOSED BY
//                      INDIVIDUAL OBJECTS THAT ARE RETURNED VALUES FROM INDIVIDUAL REDUCERS

const rootReducer = combineReducers({
  one: reducer_one,                             // IT NEEDS TO BE one BECAUSE IT IS RESPONSIBLE FOR PROPERTY one OF THE STATE
  two: reducer_two
})

// /////// //////// /////                   ///////////////////////
// /////// //////// //////  CREATING STORE  /////////////////////

const myStateStore = createStore(rootReducer)

/////////////////////////
///////////////////////////

// DEFINING FUNCTIONS THAT ARE RESPONSIBLE FOR PASSING STATE TO COMPONENTS


//////////////////////////////////////////////////////////////////
// MAP STATE TO PROPS
// PICKING WHAT TO PASS TO PROPS

const mapStateToPropsOne = ({one}, ownProps) => {           // CURRENT STATE IS THE ARGUMENT
                                                  // RESTRUCTURING IT, TAKING WHAT I NEED
  
  // ownProps doesn't CONCERN ME, BUT THEY ARE HERE 
  // THAT ARE ADDITINAL PROPS PASSED TO COMPONENT
  // THEY ARE AVAILABLE


  return {...one}

}

const mapStateToPropsTwo = ({two}, ownProps) => {
  return {...two}
}

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////mapDispatchToProps

// FOR THIS EXAMPLE ARE VERY SIMPLE BECAUSE WE NEED ONLY TO PAY ATTENTION ON WHICH TYPE OF ACTION IS
// HOW STATE CHANGE REDUCERS DECIDE (WHITHOUT PAYLOAD FOR THIS EXAMPLE)

const mapDispatchToPropsOne = dispatch => {         // dispatch         IS        store.dispatch      FUNCTION FROM redux
                                              //                                                PACKED INSIDE react-redux

  // THESE FUNCTIONS INSIDE THIS RETURNED OBJECT
  // ARE CALLED ACTIO NCREATORS

  // FOR MORE COMPLEX EXAMPLES PASSEDIN OBJECT WOULD HAVE       payload
  // paylod FOR EXAMPLE CAN BE INPUT FROM TEXTAREA IN SOME EXAMPLE THET REQUIRES TEXT INPUT

  // FOR THIS type OF THE ACTION IS IMPORTANT

  return {
    increment(){
      dispatch({type: INCREMENT_FIRST})
    },
    decrement(){
      dispatch({type: DECREMENT_FIRST})
    },
    reset(){
      dispatch({ type:RESET_FIRST})
    }
  }
}

// JSUT A DIFFERENT ACTION FOR DISPATCHING

const mapDispatchToPropsTwo = dispatch => {
  return {
    increment(){
      dispatch({type:INCREMENT_SECOND})
    },
    decrement(){
      dispatch({type:DECREMENT_SECOND})
    },
    reset(){
      dispatch({type:RESET_SECOND})
    }
  } 
}


//  connect MAKES HIGHER ORDER COMPONENT (SETTING PROPS FIRST)
// WHICH TAKES ONE COMPONENT, AND RETURNS COMPONENT WITH PASSED IN, METIONED PROPS

// PROPS WILL TAKE ALL PARTS OF STATE AND ACTION CREATORS

const CounterContainerOne = connect(mapStateToPropsOne, mapDispatchToPropsOne)(Counter)

const CounterContainerTwo = connect(mapStateToPropsTwo, mapDispatchToPropsTwo)(Counter)

/////////////////////////////////////////////////////////////////



render(
  <Provider store={myStateStore}>
    <CounterContainerOne />
    <CounterContainerTwo />
  </Provider>,
  document.getElementById('root')
)


import React from 'react'
import { useReducer } from 'react'

// it takes 2 args; state (that you want currently change) action (the methods that you want to change the value of state)
const reducerAction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        showText: !state.showText
      }
    default:
      return state
  }
}

const UseReducer = () => {
  // dispatch is to change the value from the state!
  // useReducer have two callbacks; (reducer function, initial state)

  const initialState = {
    count: 0,
    showText: false
  }

  const [state, dispatch] = useReducer(reducerAction, initialState)

  const clickButton = () => {
    dispatch({ type: 'INCREMENT' })
  }

  // The purpose of useReducer is to manage all set state in one system action 

  return (
    <>
      <h1>UseReducer()</h1>
      <h2>
        {state.count}
      </h2>
      <button onClick={clickButton}>{state.showText ? 'Hide Me' : 'Show Me'}</button>
      <br />
      <div>
        {state.showText && <p>Hello You~</p>}
      </div>
    </>
  )
}

export default UseReducer
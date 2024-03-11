import React, { useReducer } from 'react'

let initialValue = 10;

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement": 
            return state - 1;
    
        default:
            return state;
    }
}
function UseReducer() {
    let [counter, dispatch] = useReducer(reducer, initialValue);

    const increment = () => {
        dispatch({
            type: 'increment',
            payload: 0
        })
    }

    const decrement = () => {
        dispatch({
            type: 'decrement',
            payload: 0
        })
    }

  return (
    <>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default UseReducer
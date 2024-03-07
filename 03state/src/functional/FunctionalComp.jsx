import React, { useState } from 'react'

function FunctionalComp() {
  let [counter, setCounter] = useState(0);
  // state is asynchronous.

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); 
    // react treats this as object and create a reference in the memory
    // if we update something with same name it returned with the last value// 

    setCounter((prevValue) => prevValue + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <p>Counter: {counter} </p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default FunctionalComp

/** State is a  built-in react's object that is used to contain data or information about
 * the component.A state can change over time and whenever it changes the component
 * re-render.
 * States are asynchronous and immutable that can not be changed directly . to modify or 
 * maniulate the state we can make copy of it then do changes with the help of helper
 * function.
 * 
 * Controlled and Uncontrolled state
 * 
 * Components are the building blocks of UI.They are reusable piece of code that can be 
 * composed together to create complex and interactve UIs.
 * 
 * Two ways to manage states:
 * 
 * 1. Controlled component: are those components that are controlled by the state of parent
 * component that means parent component is responsible for keeping track of the values of
 * the controlled component and update it when requires.
 * 
 * 2. Uncontrolled Component: are components that are not controlled by the state of parent
 * component that means uncontrolled component is responsible for keeping track of its own value
 * and update itself when reuires.
 * 
 * 
 * Feature          Controlled Component                       Uncontrolled Component
 * 
State management    State is managed by the parent component   State is managed by the 
                                                               component itself

Data flow           Data flows from the parent component to    Data flows from the child 
                    the child component                        component to the parent component
                    

Validation          Validation can be done easily               Validation is more difficult

Use cases           Suitable for complex forms and              Suitable for simple forms and 
                    components that need to be updated          components that do not need to be
                    frequently                                  updated frequently
                     

                    

// Controlled components:

Text input
Checkbox
Radio button
Select dropdown

// Uncontrolled components:

Button
Link
Image                    
*/
import React from 'react'
import Child from './Child'
import Children from './Children'

// parent to child

/* function Parent() {
  const username = 'Iron-Man'
  return (
    <div>Parent
        <Child name = {username} />
    </div>
  )
} */

// child to parent

/*function Parent() {
  const username = (data) => {
    console.log(data);
  }
  return (
    <div>Parent
      <Child name={username} />
    </div>
  )
 }*/

// to get grand children component
//to render we need to go grand children's parent and make them render there.
//...by using {props.children}

function Parent() {
  
  return (
    <div>Parent
      <Child>
        <Children /> 
      </Child>
    </div>
  )
}

export default Parent

import React from 'react'

/* function Child({name}) {
  return (
    <div>Child
      <h1>Marvel: {name} </h1>
    </div>
  )
} */

// child to parent
/*function Child(props) {
  let myName = 'Sanjay Shandilya';

  let getData = () => {
    props.name(myName)

  }
  return (
    <div>Child <br />
      //<button onClick={() => props.name(myName)}> Send Data</button>
      <button onClick={getData}> Send Data</button>
    </div>
  )
}*/

// childern
// props here get the details of grandchild via props
function Child(props) {   
  console.log(props);
  return (
    <div>Child
      {
        props.children   // this children is inbuilt object of react to render grandchild ui.
      }
    </div>
  )
}

export default Child
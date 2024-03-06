import React, { Component } from 'react'
import Child from './Child'
import Children from './Children'

/*export default class Parent extends Component {
    age = 20;
  render() {
    return (
      <div>Parent
        <Child username = 'Sanjay Shandilya' age={this.age} />
      </div>
    )
  }
}*/

// child to parent

// export default class Parent extends Component {
//     getChildValue = (value) => {
//         // console.log(value);
//     }
//   render() {
//     return (
//       <div>Parent
//         <Child getChildValue = {this.getChildValue} />
//       </div>
//     )
//   }
// }

// grand children

export default class Parent extends Component {

  render() {
    return (
      <div>Parent
        <Child>
            <Children />
        </Child>
      </div>
    )
  }
}

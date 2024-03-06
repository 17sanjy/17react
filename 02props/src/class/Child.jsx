import React, { Component } from 'react'

/*export default class Child extends Component {
    componentDidMount(){
        console.log(this.props.username);
    }

    // sendData = () => {
    //     this.props.username;
    // }
  render() {
    return (
      <div>Child <br />
        <p>My Name: {this.props.username} </p>
        <p>Age: {this.props.age} </p>
        <button onClick={() => {this.props.age}}>Send</button> // not working for now
      </div>
      
    )
  }
}*/

// child to parent

// export default class Child extends Component {

//     /*sendValueToParent() {
//         this.props.getChildValue(10);
//     }*/

//     sendValueToParent = () => {
//         this.props.getChildValue(10); // in arrow func this indicates the current object
//     }
//     render() {
//         return (
//             <div>Child <br />
//                 <button onClick={this.sendValueToParent}>Send Value</button>

//                 {/* if use regular function, have to bind this keyword */}
//                 {/* bcoz here first this indicates the current element i.e. button
//                 but bind(this) indicates the current object that is class Child*/}

//                 {/* <button onClick={this.sendValueToParent.bind(this)}>Send Value</button> */}
//             </div>

//         )
//     }
// } 


// grand children

export default class Child extends Component {

    render() {
        return (
            <div>Child <br />
               {
                this.props.children
               }
            </div>

        )
    }
} 
import React, { useContext } from 'react'
import { store } from './store'

// function ContextApi() {
//     return (
//         <div>
//             <store.Consumer>
//                 {
//                     (ctx) => (
//                         <p>Counter: {ctx.counter}</p>
//                     )
//                 }
//             </store.Consumer>
//         </div>
//     )
// }

// second way to access state 

function ContextApi() {
    let ctxStore = useContext(store);
    return (
        <div>
            <h1>Counter: {ctxStore.counter}</h1>
        </div>
    )
}

export default ContextApi
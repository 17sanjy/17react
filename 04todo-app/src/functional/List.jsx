import React from 'react'

function List(props) {

    return (
        <ul className="list-group">
            {
                props.todos.length > 0 ? props.todos.map((data, index) => (
                    <li className="list-group-item" key={index}> {data} </li>
                )) : <li className="list-group-item">NO TODO</li>
            }
        </ul >
    )
}

export default List
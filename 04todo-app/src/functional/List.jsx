import React from 'react'

function List(props) {

    return (
        <ul className="list-group">
            {
                props.todos.length > 0 ? props.todos.map((data, index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        <div>{data}</div>
                        <div>
                            <button className='btn btn-warning mx-2'
                            onClick={() => props.editTodo(index, data)}>Edit</button>
                            <button className='btn btn-danger'
                            onClick={() => props.deleteTodo(data)}>Delete</button>
                        </div>
                    </li>
                )) : <li className="list-group-item">NO TODO</li>
            }
        </ul >
    )
}

export default List
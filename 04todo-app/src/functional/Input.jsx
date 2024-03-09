import React, { useState } from 'react'

function Input(props) {
    let [todo, setTodo] = useState('');
    let [error, setError] = useState(false);

    const inputChange = (event) => {
        setTodo(event.target.value);
        if (event.target.value.length > 0) {
            setError(false);
        } else {
            setError(true)
        }
    }

    const submit = (event) => {
        event.preventDefault();

        if (todo.length > 0) {
            props.addTodo(todo);
        } else {
            setError(true)
        }

        setTodo('');
    }

    return (
        <form className="row g-3" onSubmit={submit}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    id="inputField"
                    placeholder="enter todo..."
                    value={todo}
                    onChange={inputChange}
                />
                {error && <p className='text-danger'>please enter your todo!!!</p>
                }
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    )
}

export default Input
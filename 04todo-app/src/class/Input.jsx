import React, { Component } from 'react'

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            todo: '',
            error: false
        }
    };

    inputChange = (event) => {
        this.setState({ todo: event.target.value });

        if(event.target.value.length > 0){
            this.setState({
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
    }

    submit = (event) => {
        event.preventDefault();

        if (this.state.todo.length > 0) {

            if (this.props.editData.index !== '') {
                this.props.updateTodo(this.props.editData.index, this.state.todo);
            } else {

                this.props.addTodo(this.state.todo);
            }


            this.setState({
                todo: ''
            });
        } else {
            this.setState({
                error: true
            })
        }
    }

    componentDidUpdate(prevProps, prevStates) {
        if (prevProps.editData.index !== this.props.editData.index) {
            this.setState({ todo: this.props.editData.data })
        }
    }

    render() {
        return (
            <form className="row g-3" onSubmit={this.submit}>
                <div className="col-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputField"
                        placeholder="enter todo..."
                        value={this.state.todo}
                        onChange={this.inputChange}
                    />
                    {
                        this.state.error && <p className='text-danger'>Please Enter Todo!!!</p>
                    }
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary mb-3">
                        {
                            this.props.editData.index === '' ? 'Add' : 'Update'
                        }
                    </button>
                </div>
            </form>
        )
    }
}

import { useState } from "react"
import Input from "./Input";
import List from "./List";


function App() {
  let [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner']);
  let [editData, setEditData] = useState({
    index: "",
    data: ""
  });

  const addTodo = (value) => {
    // todos.push(value)
    
    // setTodos([...todos]);
    setTodos([...todos, value]);
  }

  const deleteTodo = (data) => {
    // todos.splice(index, 1);

    // setTodos([...todos]);

    let filteredTodo = todos.filter((todo) => todo !== data)
    
    setTodos(filteredTodo);
    
  }

  const editTodo = (index, data) => {
    setEditData({
      index, 
      data
    });
  }

  const updateTodo = (index, data) => {
    todos.splice(index, 1, data);

    setTodos([...todos]); 

    setEditData({
      index: '',
      data: ''
    })

  }

  return (
    <>
      <div className="container mt-4">
       <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
       <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </>
  )
}

export default App

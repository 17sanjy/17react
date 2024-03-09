import { useState } from "react"
import Input from "./Input";
import List from "./List";


function App() {
  let [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner']);

  const addTodo = (value) => {
    // todos.push(value)
    
    // setTodos([...todos]);
    setTodos([...todos, value]);
  }

  return (
    <>
      <div className="container mt-4">
       <Input addTodo={addTodo} />
       <List todos={todos} />
      </div>
    </>
  )
}

export default App

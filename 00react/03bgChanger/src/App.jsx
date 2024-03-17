import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div style={{height: "100vh", width: "100vw", backgroundColor: color}}>
        <button onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
      </div>
    </>
  )
}

export default App

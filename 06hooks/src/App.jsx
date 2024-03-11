
import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef();

  const clickMe = () => {
    console.log(inputRef.current.value);

    if(inputRef.current.value.length === 0){
      inputRef.current.style.borderColor = 'red';
      inputRef.current.style.width = '400px';
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input type="text"  ref={inputRef}/>
      <button onClick={clickMe}>Click Me</button>
    </>
  )
}

export default App

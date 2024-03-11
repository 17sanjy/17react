import React from 'react'
// import './App.css'
import style from './App.module.css'
console.log(style);

function App() {

  return (
    <>
    {/* inline styles */}

     {/* <p style={{backgroundColor: "red", width: "auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium hic sit molestiae deserunt! Ipsa, qui. A accusamus, consequatur, culpa incidunt quasi exercitationem, corporis expedita dolorem corrupti sequi esse. Unde!</p> */}

     {/* External styles */}

     {/* <p className='red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium hic sit molestiae deserunt! Ipsa, qui. A accusamus, consequatur, culpa incidunt quasi exercitationem, corporis expedita dolorem corrupti sequi esse. Unde!</p>
    </> */}

    {/* App.module.css styles: return object, to get the style we can access by . op */}

     {/* <p className={style.reds}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium hic sit molestiae deserunt! Ipsa, qui. A accusamus, consequatur, culpa incidunt quasi exercitationem, corporis expedita dolorem corrupti sequi esse. Unde!</p> */}

     {/* global style index.css  */}
     
     <p className='red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium hic sit molestiae deserunt! Ipsa, qui. A accusamus, consequatur, culpa incidunt quasi exercitationem, corporis expedita dolorem corrupti sequi esse. Unde!</p>
    </>
  )
}

export default App

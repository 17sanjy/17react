import React, { useEffect, useState } from 'react'

function UseEffect() {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(counter + 1);
    },1000);

    // clean-up function: stops running multiple instances of setInterval that causing
    // glitch in rendering.
    return() => clearInterval(interval);
  },[counter]);

  return (
    <>
      <p>Counter: {counter}</p>
    </>
  )
}

export default UseEffect
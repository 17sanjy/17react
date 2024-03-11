import React from 'react'
import ReactDOM from 'react-dom'
import Portal from './Portal'


function Root() {
  return (
    <div>
        <p>Root</p>
        {
            ReactDOM.createPortal(<Portal />, document.getElementById('portal'))
        }
    </div>
  )
}

export default Root
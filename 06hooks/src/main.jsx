import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ContextApi from './contextFunctional/ContextApi'
import { store } from './contextFunctional/store'
import ContextApiC from './contextClass/ContextApiC'
// import UseReducer from './UseReducer'
// import UseEffect from './UseEffect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <UseEffect /> */}

    {/* <UseReducer /> */}
    <store.Provider value={{ counter: 1001 }}>
      {/* <ContextApi /> */}

      <ContextApiC />
    </store.Provider>
  </React.StrictMode>,
)

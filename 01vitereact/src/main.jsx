import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom App</h1>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
//react also have createElement method
const reactElement =React.createElement

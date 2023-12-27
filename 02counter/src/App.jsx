import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter]= useState(7)
 /*useState is a hook , between () we have to give default variable value (here variable is counter and we are setting 7 as its default value)
  useState gives two values in array format [] , 0th index is a value , and 1st index is a function , we can write any name for both.
  
  useState accepts an initial state and returns two values:
  1.The current state.
  2.A function that updates the state.
  */

  //let counter =7
  const addValue=()=> {
    //counter=+1
    setCounter(counter++) // function call , which we declared while using useState
  }

  const removeValue=()=>{
    setCounter(counter--)
  }
  

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Decrease value</button>
    </>

  )
}

export default App

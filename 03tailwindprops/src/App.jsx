import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username:"hitesh",
    age:7
  }

  let newArr =[1,2,3,4]

  return (
  <>
    <h1 className='bg-green-400 text-black rounded-xl'>Tailwind test</h1>
    <Card someObj={myObj}  username="nitin" btnText="click me "/>
    <Card someArr={newArr} username="hitesh" btnText="visit me"/>
  </>
  )
}

export default App
/* we can pass values between components , to get data we have to write props between () while declaring 
our function*/
// myObj,newArr are components , we can pass any value to them, we can use it 


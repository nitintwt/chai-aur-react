import Chai from "./chai"

function App() {
  const username ="chai aur code"
  return (
    <>
    <Chai/>
    <h1>h1 {username}</h1>
    </>
  )
}
export default App

// to write variables in this we will use {variableName} ,this is a evaluated expression(final outcome of JS),we can not write js code in between curly brackets, we can just write its final outcome

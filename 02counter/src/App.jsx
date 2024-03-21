import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter=3
  const addValue = () => {
    // console.log("clicked")

    if (counter <= 9) {
      setCounter(counter + 1)
      setCounter(counter + 1)  //means add by two times but it doesnot
      // one catch is if we repeate this in 2 or 3 times then it doesnot increment as much times we wants to because react element takes it as a batch and then make changes
      // we do this by using previous count that is a callback except by seccounter like:
      setCounter(prevCounter => prevCounter + 1)


    }
    // console.log(counter)

  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)

    }


  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>count value : {counter}</h2>
      <button onClick={addValue}>
        Add</button>
      <br />

      <button
        onClick={removeValue}
      >remove</button>

    </>
  )
}

export default App

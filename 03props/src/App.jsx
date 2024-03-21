import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
let obj={
  username:"akhil"
}

  return (
    <>
      <h2 class=" bg-slate-900 rounded-xl mb-2">Tailwind</h2>
      <Card username={obj.username} btnText="click"/>
      <Card btnText="visite me"/>

    </>
  )
}

export default App

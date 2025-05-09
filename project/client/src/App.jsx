import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {


  const handleTestRoute = () => {
    console.log("handleTestRoute HIT")
    axios({
      method: "GET",
      url: "http://localhost:3000/test"
    })
      .then(res => {
        console.log('test res hit',res)
      }).catch(err => console.log(err))

  }

  return (
    <>
      <button onClick={(e) => handleTestRoute()}>testRo</button>
    </>
  )
}

export default App

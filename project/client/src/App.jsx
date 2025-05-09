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
        console.log('test res hit', res)
      }).catch(err => console.log(err))

  }
  const handleSecondRoute = () => {
    console.log("handleSecondRoute")
    axios({
      method: "GET",
      url: "http://localhost:3000/2ndRoute"
    })
      .then(res => {
        console.log("test res 2nd", res)
      }).catch(err => console.log(err))
  }


  const handle3 = () => {
    console.log("handle3")
    axios({
      method: "get",
      url: "http://localhost:3000/number3"
    })
      .then(res => {
        console.log("number3,its me", res)
      }).catch(err => console.log(err))
  }

  return (
    <>
      <button onClick = {(e) => handleTestRoute()}>testRoute</button>

      <button onClick = {(e) => handleSecondRoute()}>2ndRoute</button>

<button onClick ={(e) => handle3()}>Num3</button>

    </>
  )
}

export default App

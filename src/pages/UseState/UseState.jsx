import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0)
  const [textfield, setTextfield] = useState('')

  const increament = () => {
    // to mutate the state value, use setState
    setCounter((prevState) => prevState = prevState + 1)
  }

  const changeTextfield = (e) => {
    setTextfield(e.target.value)
  }

  return (
    <>
      <h1>UseState()</h1>
      <h2>
        {counter}
      </h2>
      <button onClick={increament}>Increament</button>
      <br />
      <div>
        <label>Textfield: {textfield}</label>
        <br />
        <input onChange={changeTextfield} type={'text'} name='textfield' placeholder='Enter something...' />
      </div>
    </>
  )
}

export default UseState
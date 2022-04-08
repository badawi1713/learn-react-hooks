import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0)
  const [textfield, setTextfield] = useState('')

  let increament = () => {
    // to mutate the state value, use setState
    setCounter((prevState) => prevState = counter + 1)
  }
  return (
    <>
      <h1>UseState()</h1>
      <div>
        {counter}
      </div>
      <button onClick={increament}>Increament</button>
      <br />
      <div>
        <label>Textfield: {textfield}</label>
        <br />
        <input onChange={e => setTextfield(e.target.value)} type={'text'} name='textfield' placeholder='Enter something...' />
      </div>
    </>
  )
}

export default UseState
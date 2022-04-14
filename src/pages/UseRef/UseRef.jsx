import { useRef, useState } from 'react'

const UseRef = () => {
  const [name, setName] = useState('')
  const inputRef = useRef(null)
  const nameSubmit = (e) => {
    e.preventDefault()
    setName(inputRef.current?.value)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  // useRef is used for to make pointer or reference into DOM element

  return (
    <>
      <h2>UseRef</h2>
      <br />
      <form onSubmit={nameSubmit}>
        <input placeholder='Type your name...' ref={inputRef} name='name' />
        <button type='submit'>Change Name</button>
      </form>
      <br />
      <h2>Hello, {name || "No Name"}</h2>
    </>
  )
}

export default UseRef
import { useRef } from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
  const buttonRef = useRef(null)
  return (
    <>
      <h1>UseImperativeHandle</h1>
      <br />
      <button onClick={() => buttonRef.current.toggleHandler()} >Button From Parent</button>
      <br />
      <Button ref={buttonRef} />
    </>
  )
}

export default UseImperativeHandle
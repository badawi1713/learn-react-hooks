import { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.value = "HELLO"
    console.log('useEffect', inputRef.current.value)
  }, [])

  useLayoutEffect(() => {
    console.log("useLayoutEffect", inputRef.current.value)
  }, [])

  // the difference between useLayoutEffect and UseEffect is
  // useLayoutEffect always called first when page is rendering
  // very useful if you want to change your layout before showing data or function

  return (
    <>
      <h1>UseLayoutEffect</h1>
      <br />
      <input ref={inputRef} value="DZAKY" onChange={e => console.log(e)} />
    </>
  )
}

export default UseLayoutEffect
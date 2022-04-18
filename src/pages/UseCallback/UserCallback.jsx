import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const UserCallback = () => {
  const [data, setData] = useState('Hello Dzaky!')
  const [toggle, setToggle] = useState(false)

  // useCallback hooks its just like useMemo, if useMemo is only use to get access of the value, useCallback is used to get the function!

  const returnComment = useCallback(() => {
    return data;
  }, [data])
  return (
    <>
      <h1>UseCallback</h1>
      <Child returnComment={returnComment} />
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4>toggle</h4>}
    </>
  )
}

export default UserCallback
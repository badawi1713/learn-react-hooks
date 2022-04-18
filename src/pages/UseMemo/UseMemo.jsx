import axios from 'axios'
import { useMemo } from 'react'
import { useEffect, useState } from 'react'

const UseMemo = () => {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName
      }
    }

    // even we change the toggle state, this dunction will bre recomputed so we will use useMemo hooks to get better performance!
    console.log('this was computed!')
    return longestName
  }

  const getLongestName = useMemo(() => {
    findLongestName(data)
  }, [data])

  return (
    <>
      <h1>UseMemo</h1>
      <p>Longest comment: {getLongestName}</p>
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4>toggle</h4>}
    </>
  )
}

export default UseMemo
import axios from 'axios'
import { useEffect, useReducer } from 'react'

const initialState = {
  data: [],
  error: false,
  loading: true,
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "COUNT_INCREMENT":
      return {
        ...state, count: state.count + 1
      }
    case "GET_DATA_LOADING":
      return {
        ...state, error: false
      }
    case "GET_DATA_SUCCESS":
      return {
        ...state, data: action.payload.data, loading: false
      }
    case "GET_DATA_ERROR":
      return {
        ...state, data: [], loading: false, error: true
      }
    default:
      return state
  }
}

const UseEffect = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { loading, data, error, count } = state
  // UseEffect is a function that only runs when the page is re-render
  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'GET_DATA_LOADING' })
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setTimeout(() => {
          dispatch({
            type: 'GET_DATA_SUCCESS', payload: {
              data: response.data
            }
          })
        }, 3000)
      } catch (error) {
        console.log(error)
        dispatch({ type: 'GET_DATA_ERROR' })
      }
    }

    getData()
  }, [])

  // use effect dependency have 3 types:
  // 1. not using dependencies so use effect will always run
  // 2. with empty dependency [], use effect will only runs once
  // 3. with dependencies [dependency, ...], the use effect will run when the page is first time rendered and if the dependecies change! 

  const countClickHandler = () => {
    dispatch({
      type: "COUNT_INCREMENT"
    })
  }

  return (
    <div>
      <center>
      <h3>Click Me</h3>
      <button style={{padding: "10px 8px", width: "42px", margin: "10px 0", cursor: "pointer"}} onClick={countClickHandler}>{count}</button>
     </center>
      {loading && <p>Loading Content...</p>}
      {error && <p>Something when wrong!</p>}
      {data?.length === 0 && !loading ? <p>Data is empty</p> :
        data?.map(item => (
          <ol key={item.id}>
            <li>{item.id}. Comments: {item.title}</li>
          </ol>
        ))
      }
    </div>
  )
}

export default UseEffect
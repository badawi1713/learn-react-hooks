import axios from 'axios'
import { useEffect, useReducer } from 'react'

const initialState = {
  data: [],
  error: false,
  loading: true
}

const reducer = (state, action) => {
  switch (action.type) {
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
  const { loading, data, error } = state
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
  return (
    <div>
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
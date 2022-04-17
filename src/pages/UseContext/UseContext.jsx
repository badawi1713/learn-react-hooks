import { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const UserContext = createContext(null)

const UseContext = () => {
  const [username, setUsername] = useState('')
  return (
    <UserContext.Provider value={{username, setUsername}}>
      <h1>
        UseContext
      </h1>
      <br />
      <Login  />
      <br />
      <User />
    </UserContext.Provider>
  )
}

export default UseContext
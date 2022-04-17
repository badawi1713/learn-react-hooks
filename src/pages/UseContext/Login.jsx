import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContext'

const Login = () => {
    const { setUsername } = useContext(UserContext)
    console.log(UserContext)
    return (
        <div>
            <input onChange={e => setUsername(e.target.value)} />
        </div>
    )
}

export default Login
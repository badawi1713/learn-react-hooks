import { useContext } from 'react'
import { UserContext } from './UseContext'

const User = () => {
    const { username } = useContext(UserContext)
    console.log(username)
    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    )
}

export default User
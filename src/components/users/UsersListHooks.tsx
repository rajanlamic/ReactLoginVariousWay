import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { async } from 'q'

interface UsersListProps {
}

const UsersListHooks: React.FC<UsersListProps> = () => {
    const [users, setUsers] = useState<any>([])

    const getUserList = async () => {
        try {
            const result = await axios.get('http://localhost:4000/users/list',
                {
                    headers: {
                        "x-auth-token":
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJhamFubGFtaWMiLCJpYXQiOjE1NzQxNTg4MzYsImV4cCI6MTU3NDE1OTEzNn0.iDpgG8zbqnHFOjJLGMPxKfJVl_C9R_nNwcNAe5qAoVI"
                    }
                })
            setUsers(result)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserList()
    }, [])

    if (!users || !users.data) {
        return <div>Loading..</div>
    }

    return <ul>
        {console.log('users', users.data)}
        {users && users.data && users.data.map((user: any) => (
            <li>{user.first_name}</li>
        ))}
    </ul>
}

export default UsersListHooks

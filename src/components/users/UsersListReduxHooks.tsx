import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUserListAction } from './users-actions'
import { selectUser, selectUserName } from './users-selector'

interface UsersListProps {
}

const UsersListReduxHooks: React.FC<UsersListProps> = () => {

    const dispatch = useDispatch()
    const users: any = useSelector(selectUser)
    const usersName: any = useSelector(selectUserName)("rajan")

    // console.log("you herer.....", users)

    const getUserList = async () => {
        try {
            const result = await axios.get('http://localhost:4000/users/list',
                {
                    headers: {
                        "x-auth-token":
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJhamFubGFtaWMiLCJpYXQiOjE1NzQxNjE1OTYsImV4cCI6MTU3NDE2MTg5Nn0.2Ooyj8XyOUfIfcmaYrin2att7gHVEBFdpbyy17sycPI"
                    }
                })
            dispatch(getUserListAction(result))
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

    // componentDidMount() {
    //     this.getUserList()
    // }


    // console.log('users', users)

    return <>
        <div>ss : {usersName.first_name}</div>
        <ul>
            {/* {console.log('users', users.data)} */}
            {
                users && users.data && users.data.map((user: any) => (
                    <li>{user.first_name}</li>
                ))
            }
        </ul ></>

}

export default UsersListReduxHooks

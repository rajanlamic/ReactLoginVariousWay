import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

interface UsersListProps {
}

class UsersList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = { users: [] }
    }

    getUserList = async () => {
        try {
            const result = await axios.get('http://localhost:4000/users/list',
                {
                    headers: {
                        "x-auth-token":
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJhamFubGFtaWMiLCJpYXQiOjE1NzQxNTg4MzYsImV4cCI6MTU3NDE1OTEzNn0.iDpgG8zbqnHFOjJLGMPxKfJVl_C9R_nNwcNAe5qAoVI"
                    }
                })
            this.setState((prevState: any) => ({
                users: result
            }))
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect(() => {
    //     getUserList()
    // }, [])

    // if (!users || !users.data) {
    //     return <div>Loading..</div>
    // }

    componentDidMount() {
        this.getUserList()
    }

    render() {
        if (!this.state.users || !this.state.users.data) {
            return <div>Loading..</div>
        }
        return <ul>
            {console.log('users', this.state.users.data)}
            {
                this.state.users && this.state.users.data && this.state.users.data.map((user: any) => (
                    <li>{user.first_name}</li>
                ))
            }
        </ul >
    }

}

// const mapStateToProps = (state: any, props: any) => ({
//     users: []
// })

// const mapDispatchToProps = (dispatch: any, props: any) => {
//     getUserList: () => { }
// }

export default UsersList

import { Link } from "react-router-dom"
import React from 'react'

const UsersPage: React.FC = () => {
    return <>
        <div><Link to="/users">Users</Link></div>
        <div><Link to="/users-hooks">Users Hooks</Link></div>
        <div><Link to="/users-redux">Users Redux</Link></div>
        <div><Link to="/users-redux-hooks">Users Redux Hooks</Link></div>
    </>
}

export default UsersPage

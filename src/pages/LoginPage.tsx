import { Link } from "react-router-dom"
import React from 'react'

const LoginPage: React.FC = () => {
    return <>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/login-redux">Login Redux</Link></div>
        <div><Link to="/login-hooks">Login with hooks</Link></div>
        <div><Link to="/login-redux-hooks">Login with redux hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks">Login with redux saga hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks-refs">Login with redux saga hooks refs</Link></div>
    </>
}

export default LoginPage

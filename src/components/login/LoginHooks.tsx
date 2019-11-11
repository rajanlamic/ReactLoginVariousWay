import React, { useState } from 'react'

const LoginHooks = () => {
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const value = event.target.value
        switch (name) {
            case "userName":
                setUserName(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
        }
    }

    const handleSubmit = () => {
        console.log('username', userName)
        console.log('password', password)
    }

    return <div>
        <label>Username</label>
        <input type="text" name="userName" value={userName} onChange={(event) => handleChange(event, "userName")} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(event) => handleChange(event, "password")} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

export default LoginHooks

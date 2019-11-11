import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, userNameAction, passwordAction, makeLogin } from './login-action'
import { selectLogin } from './login-selector'
import { LOGIN } from './login-constants'
import { logIn } from './login-service'

const LoginReduxHooks = () => {

    const selecterLogin = useSelector(selectLogin)
    const dispatch = useDispatch()

    const setUserNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(userNameAction(event.target.value))
    }

    const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(passwordAction(event.target.value))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch({ type: LOGIN.PENDING })
        try {
            const loginPayload = {
                "userName": selecterLogin.login && selecterLogin.login.userName,
                "password": selecterLogin.login && selecterLogin.login.password
            }

            const result = await logIn(loginPayload)
            console.log('result', result)
            dispatch(makeLogin({ ...loginPayload, token: result }))
        } catch (err) {
            dispatch({ type: LOGIN.REJECTED })
            console.log(err)
        }
    }

    return <form onSubmit={handleSubmit}>
        <div>Login redux hooks</div>
        <label>Username</label>
        <input type="text" name="userName" value={selecterLogin.login && selecterLogin.login.userName} onChange={setUserNameHandler} />
        <label>Password</label>
        <input type="password" name="password" value={selecterLogin.login && selecterLogin.login.password} onChange={setPasswordHandler} />
        <input type="submit" value="Submit" />
    </form>
}

export default LoginReduxHooks

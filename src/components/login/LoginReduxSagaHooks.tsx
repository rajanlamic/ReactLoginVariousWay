import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, userNameAction, passwordAction, makeLogin, userNameActionCreateAction, passwordActionCreateAction } from './login-action'
import { selectLogin } from './login-selector'
import { LOGIN } from './login-constants'
import { logIn } from './login-service'

const LoginReduxSagaHooks = () => {

    const selecterLogin = useSelector(selectLogin)
    const dispatch = useDispatch()

    const setUserNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(userNameActionCreateAction(event.target.value))
    }

    const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(passwordActionCreateAction(event.target.value))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const loginPayload = {
            "userName": selecterLogin.login && selecterLogin.login.userName,
            "password": selecterLogin.login && selecterLogin.login.password
        }
        dispatch({ type: LOGIN.PENDING, payload: loginPayload })
    }

    return <form onSubmit={handleSubmit}>
        <div>Login redux saga hooks</div>
        <div>Profile details</div>
        <label>Username</label>
        <input type="text" name="userName" value={selecterLogin.login && selecterLogin.login.userName} onChange={setUserNameHandler} />
        <label>Password</label>
        <input type="password" name="password" value={selecterLogin.login && selecterLogin.login.password} onChange={setPasswordHandler} />
        <input type="submit" value="Submit" />
    </form>
}

export default LoginReduxSagaHooks

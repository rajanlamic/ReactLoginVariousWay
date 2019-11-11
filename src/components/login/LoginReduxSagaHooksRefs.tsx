import React, { InputHTMLAttributes } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, userNameAction, passwordAction, makeLogin } from './login-action'
import { selectLogin } from './login-selector'
import { LOGIN } from './login-constants'
import { logIn } from './login-service'

const LoginReduxSagaHooksRefs = () => {

    const userNameElm = React.createRef<HTMLInputElement>()
    const passwordElm = React.createRef<HTMLInputElement>()

    const dispatch = useDispatch()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const loginPayload = {
            "userName": userNameElm.current && userNameElm.current.value,
            "password": passwordElm.current && passwordElm.current.value
        }
        dispatch({ type: LOGIN.PENDING, payload: loginPayload })
    }

    return <form onSubmit={handleSubmit}>
        <div>Login redux saga hooks refs</div>
        <label>Username</label>
        <input type="text" name="userName" ref={userNameElm} />
        <label>Password</label>
        <input type="password" name="password" ref={passwordElm} />
        <input type="submit" value="Submit" />
    </form>
}

export default LoginReduxSagaHooksRefs

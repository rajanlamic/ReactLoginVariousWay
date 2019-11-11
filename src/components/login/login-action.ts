import { LOGIN } from "./login-constants"

const login = (payload: any) => {
    return {
        type: 'LOGIN',
        payload
    }
}

const userNameAction = (payload: any) => {
    return {
        type: 'USERNAME',
        payload
    }
}

const passwordAction = (payload: any) => {
    return {
        type: 'PASSWORD',
        payload
    }
}

const makeLogin = (payload: any) => {
    return {
        type: LOGIN.FULLFILLED,
        payload
    }
}

export { login, userNameAction, passwordAction, makeLogin }

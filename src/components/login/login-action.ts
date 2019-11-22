import { LOGIN } from "./login-constants"
import { createAction } from "redux-actions"

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

const userNameActionCreateAction = createAction<string>("USERNAME")
const passwordActionCreateAction = createAction<string>("PASSWORD")

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

export { login, userNameAction, passwordAction, makeLogin, userNameActionCreateAction, passwordActionCreateAction }

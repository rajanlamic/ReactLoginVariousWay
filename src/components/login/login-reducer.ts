import { State } from "../../combined-reducers"
import { LOGIN } from "./login-constants"
import { userNameAction } from "./login-action"

export interface LoginState {
    isPending?: boolean,
    isFullfilled?: boolean,
    isRejected?: boolean,
    login?: {
        userName: string,
        password: string
    }
}

const loginReducer = (state: LoginState = {}, action: any): any => {
    const { type, payload } = action
    switch (type) {
        case 'LOGIN':
            return { ...state, login: { userName: payload.userName, password: payload.password } }
        case 'USERNAME':
            return {
                ...state, login: { ...state.login, userName: payload }
            }
        case 'PASSWORD':
            return {
                ...state, login: { ...state.login, password: payload }
            }
        case LOGIN.PENDING:
            return {
                ...state, isPending: true, isFullfilled: false, isRejected: false
            }
        case LOGIN.FULLFILLED:
            return {
                ...state, login: { userName: payload.userName, password: payload.password, token: payload.token }, isFullfilled: true, isPending: false, isRejected: false
            }
        case LOGIN.REJECTED:
            return {
                ...state, isRejected: true, isPending: false, isFullfilled: false
            }
        default:
            return state
    }
}

export default loginReducer

import { combineReducers } from "redux";
import loginReducer, { LoginState } from "./components/login/login-reducer";

export interface State {
    loginReducer: LoginState
}

const combibedReducers = combineReducers<State>({
    loginReducer
})

export default combibedReducers

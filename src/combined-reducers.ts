import { combineReducers } from "redux";
import loginReducer, { LoginState } from "./components/login/login-reducer";
import usersReducers from "./components/users/users-reducer";
import listReducer from "./components/list/list-reducer";
import { ListState } from "./components/list/types";

export interface State {
    loginReducer: LoginState
    usersReducers: any,
    listReducer: ListState
}

const combibedReducers = combineReducers<State>({
    loginReducer,
    usersReducers,
    listReducer,
})

export default combibedReducers

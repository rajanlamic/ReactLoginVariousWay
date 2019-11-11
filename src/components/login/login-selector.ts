import { State } from "../../combined-reducers";
import { createSelector } from 'reselect'
import { LoginState } from "./login-reducer";

const loginSelector = (state: State) => state.loginReducer

const selectLogin = createSelector(loginSelector, (login: LoginState): LoginState => login)

export { selectLogin }

import React from 'react'
import { connect } from 'react-redux'
import { State } from '../../combined-reducers'
import { login, userNameAction, passwordAction } from './login-action'

class LoginRedux extends React.Component<any, any> {

    setUserNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dispatch(userNameAction(event.target.value))
    }

    setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dispatch(passwordAction(event.target.value))
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>, payload: any) => {
        event.preventDefault()
        this.props.dispatch(login(payload))
    }


    render() {
        return <form onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            this.handleSubmit(event, { userName: this.props.userName, password: this.props.password })}>
            <div>Login redux</div>
            <label>Username</label>
            <input type="text" name="userName" value={this.props.userName} onChange={this.setUserNameHandler} />
            <label>Password</label>
            <input type="password" name="password" value={this.props.password} onChange={this.setPasswordHandler} />
            <input type="submit" value="Submit" />
        </form>
    }

}

const mapStateToProps = (state: State, props: any) => ({
    userName: state.loginReducer.login && state.loginReducer.login.userName,
    password: state.loginReducer.login && state.loginReducer.login.password
})

const mapDispatchToProps = (dispatch: any, props: any) => ({
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, payload: any) => {
        event.preventDefault()
        dispatch(login(payload))
    },
    setUserName: (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(userNameAction(event.target.value))
    },
    setPassword: (password: string) => password && dispatch(passwordAction(password)),
})
export default connect(mapStateToProps)(LoginRedux)

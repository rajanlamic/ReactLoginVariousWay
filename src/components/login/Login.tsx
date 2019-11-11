import React from 'react'

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = { userName: '', password: '' }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const value = event.target.value
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('username', this.state.userName)
        console.log('password', this.state.password)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div>Login with class</div>
            <label>Username</label>
            <input type="text" name="userName" value={this.state.userName} onChange={(event) => this.handleChange(event, "userName")} />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event, "password")} />
            <input type="submit" value="Submit" />
        </form>
    }

}

export default Login

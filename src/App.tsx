import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login/Login'
import LoginHooks from './components/login/LoginHooks'
import LoginRedux from './components/login/LoginRedux'
import LoginReduxHooks from './components/login/LoginReduxHooks'
import Home from './Home'
import LoginReduxSagaHooks from './components/login/LoginReduxSagaHooks';
import LoginReduxSagaHooksRefs from './components/login/LoginReduxSagaHooksRefs';
import UsersListHooks from './components/users/UsersListHooks';
import UsersList from './components/users/UsersList';
import UsersListRedux from './components/users/UsersListRedux';
import UsersListReduxHooks from './components/users/UsersListReduxHooks';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import './styles/index.scss'
import ListPage from './pages/ListPage';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="menus">
          <div><Link to="/">Home</Link></div>
          {/* <div><Link to="/login">Login</Link></div>
        <div><Link to="/login-redux">Login Redux</Link></div>
        <div><Link to="/login-hooks">Login with hooks</Link></div>
        <div><Link to="/login-redux-hooks">Login with redux hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks">Login with redux saga hooks</Link></div>
        <div><Link to="/login-redux-saga-hooks-refs">Login with redux saga hooks refs</Link></div>
        <br></br>
        <div><Link to="/users">Users</Link></div>
        <div><Link to="/users-hooks">Users Hooks</Link></div>
        <div><Link to="/users-redux">Users Redux</Link></div> */}
          <div><Link to="/login-page">Login</Link></div>
          <div><Link to="/users-page">Users</Link></div>
          <div><Link to="/list-page">List</Link></div>
        </div>

        <Switch>
          <Route path="/login-page" component={LoginPage} />
          <Route path="/users-page" component={UsersPage} />
          <Route path="/list-page" component={ListPage} />

          <Route path="/login-hooks" component={LoginHooks} />
          <Route path="/login-redux" component={LoginRedux} />
          <Route path="/login-redux-hooks" component={LoginReduxHooks} />
          <Route path="/login-redux-saga-hooks" component={LoginReduxSagaHooks} />
          <Route path="/login-redux-saga-hooks-refs" component={LoginReduxSagaHooksRefs} />
          <Route path="/login" component={Login} />

          <Route path="/users" component={UsersList} />
          <Route path="/users-hooks" component={UsersListHooks} />
          <Route path="/users-redux" component={UsersListRedux} />
          <Route path="/users-redux-hooks" component={UsersListReduxHooks} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
